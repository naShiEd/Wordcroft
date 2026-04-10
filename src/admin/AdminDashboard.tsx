import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS, type CMSContent } from '../CMSContext';
import './AdminDashboard.css';
import {
  Users, Package, Save, LogOut, Plus, Trash2, CheckCircle,
  Menu, X, Globe, Home, ShieldCheck, FileText, Briefcase, Leaf
} from 'lucide-react';

type ActiveTab =
  | 'global' | 'home' | 'about' | 'missionValues'
  | 'partnerships' | 'sustainability' | 'news' | 'insights' | 'careers'
  | 'services' | 'team' | 'faqs';

export default function AdminDashboard() {
  const { content, updateContent, isLoading } = useCMS();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>('global');
  const [formData, setFormData] = useState<CMSContent | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    if (localStorage.getItem('isAdminAuthenticated') !== 'true') navigate('/admin/login');
  }, [navigate]);

  React.useEffect(() => {
    if (content) setFormData(JSON.parse(JSON.stringify(content)));
  }, [content]);

  const dc = <T,>(obj: T): T => JSON.parse(JSON.stringify(obj));

  const handleLogout = () => { localStorage.removeItem('isAdminAuthenticated'); navigate('/'); };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      await updateContent(formData!);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (err) {
      console.error("Save failed:", err);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 5000);
    }
  };

  // ── Update helpers ──────────────────────────────────────────────────────────
  const setG = (section: string, field: string, val: string) => {
    const d = dc(formData!) as any;
    if (section === 'root') d.global[field] = val; else d.global[section][field] = val;
    setFormData(d);
  };
  const setGA = (section: string, i: number, field: string, val: string) => {
    const d = dc(formData!) as any;
    d.global[section][i][field] = val;
    setFormData(d);
  };
  const addGA = (section: string, item: any) => {
    const d = dc(formData!) as any;
    d.global[section].push(item);
    setFormData(d);
  };
  const delGA = (section: string, i: number) => {
    const d = dc(formData!) as any;
    d.global[section].splice(i, 1);
    setFormData(d);
  };

  const setP = (page: string, section: string, field: string, val: string) => {
    const d = dc(formData!) as any;
    if (section === 'root') d.pages[page][field] = val; else d.pages[page][section][field] = val;
    setFormData(d);
  };

  // nested object arrays: e.g. pages.about.reliability.stats[i].val
  const setPA = (page: string, section: string, arr: string, i: number, field: string, val: string) => {
    const d = dc(formData!) as any;
    d.pages[page][section][arr][i][field] = val;
    setFormData(d);
  };
  const addPA = (page: string, section: string, arr: string, item: any) => {
    const d = dc(formData!) as any;
    d.pages[page][section][arr].push(item);
    setFormData(d);
  };
  const delPA = (page: string, section: string, arr: string, i: number) => {
    const d = dc(formData!) as any;
    d.pages[page][section][arr].splice(i, 1);
    setFormData(d);
  };

  // flat string arrays: e.g. pages.home.scaleSection.images[i]
  const setFS = (page: string, section: string, arr: string, i: number, val: string) => {
    const d = dc(formData!) as any; d.pages[page][section][arr][i] = val; setFormData(d);
  };
  const delFS = (page: string, section: string, arr: string, i: number) => {
    const d = dc(formData!) as any; d.pages[page][section][arr].splice(i, 1); setFormData(d);
  };

  // collections
  const setC = (col: keyof CMSContent['collections'], id: string, field: string, val: string) => {
    const d = dc(formData!);
    const idx = d.collections[col].findIndex((x: any) => x.id === id);
    if (idx !== -1) { (d.collections[col][idx] as any)[field] = val; setFormData(d); }
  };
  const addC = (col: keyof CMSContent['collections'], item: any) => {
    const d = dc(formData!);
    d.collections[col].push({ ...item, id: Date.now().toString() });
    setFormData(d);
  };
  const delC = (col: keyof CMSContent['collections'], id: string) => {
    const d = dc(formData!);
    d.collections[col] = d.collections[col].filter((x: any) => x.id !== id);
    setFormData(d);
  };

  // ── Sidebar nav definition ──────────────────────────────────────────────────
  const coreNav   = [{ id: 'global',       icon: Globe,       label: 'Global Identity' }];
  const pageNav   = [
    { id: 'home',         icon: Home,        label: 'Home Experience' },
    { id: 'about',        icon: Users,       label: 'Company Story' },
    { id: 'missionValues',icon: ShieldCheck, label: 'Mission & Values' },
    { id: 'partnerships', icon: Package,     label: 'Partnerships' },
    { id: 'sustainability',icon: Leaf,       label: 'Sustainability' },
    { id: 'news',         icon: FileText,    label: 'News & Updates' },
    { id: 'insights',     icon: Globe,       label: 'Insights Portfolio' },
    { id: 'careers',      icon: Briefcase,   label: 'Careers Portal' },
  ];
  const colNav    = [
    { id: 'services', icon: Package,      label: 'Service Portfolio' },
    { id: 'team',     icon: Users,        label: 'Team Profiles' },
    { id: 'news_col', icon: FileText,     label: 'News Articles' },
    { id: 'insights_col', icon: Globe,    label: 'Insights Posts' },
    { id: 'faqs',     icon: CheckCircle,  label: 'Operational FAQs' },
  ];

  if (isLoading || !formData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0c10', color: '#fff' }}>
        <div className="loader">Loading Admin Panel...</div>
      </div>
    );
  }

  const fd = formData as any;

  const NavGroup = ({ title, items }: { title: string; items: typeof coreNav }) => (
    <>
      <div className="sidebar-section-title">{title}</div>
      {items.map(t => (
        <button key={t.id} onClick={() => setActiveTab(t.id as ActiveTab)}
          className={`nav-tab${activeTab === t.id ? ' active' : ''}`}>
          <t.icon size={18} />
          {isSidebarOpen && <span>{t.label}</span>}
        </button>
      ))}
    </>
  );

  return (
    <div className="admin-layout">
      {/* ── Sidebar ── */}
      <aside className="admin-sidebar" style={{ width: isSidebarOpen ? '280px' : '80px' }}>
        <div className="sidebar-header">
          {isSidebarOpen && <span className="admin-logo-text">AdminPanel</span>}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="toggle-sidebar">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="sidebar-nav">
          <NavGroup title="Core Administration" items={coreNav} />
          <NavGroup title="Institutional Pages"  items={pageNav} />
          <NavGroup title="Company Collections" items={colNav}  />
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={20} />{isSidebarOpen && <span>Logout Portal</span>}
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-title">
            <h1>CMS Control Panel</h1>
            <p>Managing {content.global.companyName} portal content</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => window.open('/', '_blank')}
              className="view-site-link"
              style={{ padding: '10px 18px' }}
            >
              <Globe size={16} /> Preview Site
            </button>
            <button
              className={`save-changes-btn ${saveStatus === 'success' ? 'success' : ''}`}
              disabled={saveStatus === 'saving' || !formData}
              onClick={handleSave}
            >
              {saveStatus === 'saving' ? (
                <>
                  <Save size={18} className="spin" />
                  Saving...
                </>
              ) : saveStatus === 'success' ? (
                <>
                  <CheckCircle size={18} />
                  Changes Saved
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </header>

        <div className="admin-content-wrap">

          {/* ═══════════════ GLOBAL ═══════════════ */}
          {activeTab === 'global' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header"><ShieldCheck size={20} /> General Information</h3>
                <div className="admin-grid">
                  <Field label="Company Name"   value={fd.global.companyName}        onChange={v => setG('root','companyName',v)} />
                  <ImageField label="Global Logo" value={fd.global.logo} onChange={v => setG('root','logo',v)} />
                  <div className="full-width"><SectionDivider title="Contact Details (Mutare HQ)" /></div>
                  <Field label="Email"    value={fd.global.contact.email}    onChange={v => setG('contact','email',v)} />
                  <Field label="Phone"    value={fd.global.contact.phone}    onChange={v => setG('contact','phone',v)} />
                  <Field label="WhatsApp" value={fd.global.contact.whatsapp} onChange={v => setG('contact','whatsapp',v)} />
                  <Field label="City"     value={fd.global.contact.city}     onChange={v => setG('contact','city',v)} />
                  <Field label="Address" full value={fd.global.contact.address} onChange={v => setG('contact','address',v)} />
                  <Field label="Postal"  full value={fd.global.contact.postal}  onChange={v => setG('contact','postal',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header"><Globe size={20} /> Social Media Links</h3>
                <div className="admin-grid">
                  <Field label="Facebook URL"  value={fd.global.social?.facebook || ''} onChange={v => setG('social','facebook',v)} placeholder="https://facebook.com/…" />
                  <Field label="LinkedIn URL"  value={fd.global.social?.linkedin || ''} onChange={v => setG('social','linkedin',v)} placeholder="https://linkedin.com/…" />
                  <Field label="Twitter / X"   value={fd.global.social?.twitter || ''}  onChange={v => setG('social','twitter',v)}  placeholder="https://twitter.com/…" />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header"><FileText size={20} /> Footer Content</h3>
                <div className="admin-grid">
                  <Field label="Footer Copyright Text" full value={fd.global.footer?.text || ''}    onChange={v => setG('footer','text',v)} />
                  <Field label="Footer Tagline"        full value={fd.global.footer?.tagline || ''} onChange={v => setG('footer','tagline',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header"><ShieldCheck size={20} /> SEO Defaults</h3>
                <div className="admin-grid">
                  <Field label="Default Page Title"        full value={fd.global.seo?.defaultTitle || ''} onChange={v => setG('seo','defaultTitle',v)} />
                  <Field label="Default Meta Description"  full value={fd.global.seo?.defaultDesc  || ''} onChange={v => setG('seo','defaultDesc',v)} area />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header"><ShieldCheck size={20} /> Compliance Partners & Bodies</h3>
                <p style={{ color: 'var(--gray)', fontSize: 13, marginBottom: 20 }}>These logos and names appear in the footer showcase.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                  {(fd.global.compliance || []).map((c: any, i: number) => (
                    <div key={i} className="asset-edit-card" style={{ padding: 16 }}>
                      <div className="item-preview-img" style={{ height: 80, background: '#fff', padding: 8, marginBottom: 16, borderRadius: 8 }}>
                        <img src={c.logo} alt={c.name} style={{ objectFit: 'contain' }} />
                      </div>
                      <Field label="Partner Name" value={c.name} onChange={v => setGA('compliance', i, 'name', v)} />
                      <div style={{ marginTop: 12 }}>
                        <SingleImageUpload onUpload={v => setGA('compliance', i, 'logo', v)} currentUrl={c.logo} />
                      </div>
                      <button onClick={() => delGA('compliance', i)} className="delete-item-btn mini" style={{ marginTop: 16 }}>
                        <Trash2 size={14} /> Remove Partner
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => addGA('compliance', { name: 'New Partner', logo: 'https://api.dicebear.com/7.x/initials/svg?seed=New' })} 
                    className="add-item-card-btn"
                    style={{ height: 'auto', minHeight: 180 }}
                  >
                    <Plus size={24} />
                    <span>Add Compliance Partner</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ HOME ═══════════════ */}
          {activeTab === 'home' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Title (\\n = line break)" full area value={fd.pages.home.hero.title}       onChange={v => setP('home','hero','title',v)} />
                  <Field label="Subtitle"                      full      value={fd.pages.home.hero.subtitle}    onChange={v => setP('home','hero','subtitle',v)} />
                  <ImageField label="Hero Background Image"    full      value={fd.pages.home.hero.bg || ''}    onChange={v => setP('home','hero','bg',v)} />
                  <Field label="Primary Button Text"                     value={fd.pages.home.hero.primaryBtn || ''} onChange={v => setP('home','hero','primaryBtn',v)} />
                  <Field label="Secondary Button Text"                   value={fd.pages.home.hero.secondaryBtn || ''} onChange={v => setP('home','hero','secondaryBtn',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Scale Section</h3>
                <div className="admin-grid">
                  <Field label="Badge Text"    value={fd.pages.home.scaleSection?.badge || ''} onChange={v => setP('home','scaleSection','badge',v)} />
                  <Field label="Section Title" value={fd.pages.home.scaleSection?.title || ''} onChange={v => setP('home','scaleSection','title',v)} />
                </div>
                
                <MultiImageHeader 
                  label="Fleet Images Row 1" 
                  onAddMultiple={(urls) => {
                    const d = dc(formData!) as any;
                    d.pages.home.scaleSection.images.push(...urls);
                    setFormData(d);
                  }} 
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                  {(fd.pages.home.scaleSection?.images || []).map((img: string, i: number) => (
                    <div key={i} className="asset-edit-card">
                      <div className="item-preview-img"><img src={img} alt="" /></div>
                      <SingleImageUpload onUpload={(url) => setFS('home','scaleSection','images',i,url)} currentUrl={img} />
                      <input value={img} onChange={e => setFS('home','scaleSection','images',i,e.target.value)} className="admin-input tiny-input" style={{ fontSize: 10, marginTop: 8 }} />
                      <button onClick={() => delFS('home','scaleSection','images',i)} className="delete-item-btn mini"><Trash2 size={14} /> Remove</button>
                    </div>
                  ))}
                </div>

                <MultiImageHeader 
                  label="Fleet Images Row 2" 
                  onAddMultiple={(urls) => {
                    const d = dc(formData!) as any;
                    d.pages.home.scaleSection.imagesRow2.push(...urls);
                    setFormData(d);
                  }} 
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                  {(fd.pages.home.scaleSection?.imagesRow2 || []).map((img: string, i: number) => (
                    <div key={i} className="asset-edit-card">
                      <div className="item-preview-img"><img src={img} alt="" /></div>
                      <SingleImageUpload onUpload={(url) => setFS('home','scaleSection','imagesRow2',i,url)} currentUrl={img} />
                      <input value={img} onChange={e => setFS('home','scaleSection','imagesRow2',i,e.target.value)} className="admin-input tiny-input" style={{ fontSize: 10, marginTop: 8 }} />
                      <button onClick={() => delFS('home','scaleSection','imagesRow2',i)} className="delete-item-btn mini"><Trash2 size={14} /> Remove</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Partners & Testimonials</h3>
                <div className="admin-grid">
                  <Field label="Badge Text"    value={fd.pages.home.partners?.badge  || ''} onChange={v => setP('home','partners','badge',v)} />
                  <Field label="Section Title" value={fd.pages.home.partners?.title || ''} onChange={v => setP('home','partners','title',v)} />
                </div>

                <MultiImageHeader 
                  label="Partner Logos" 
                  onAddMultiple={(urls) => {
                    const d = dc(formData!) as any;
                    d.pages.home.partners.logos.push(...urls);
                    setFormData(d);
                  }} 
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 16, marginBottom: 24 }}>
                  {(fd.pages.home.partners?.logos || []).map((img: string, i: number) => (
                    <div key={i} className="asset-edit-card">
                      <div className="item-preview-img" style={{ background: '#fff', padding: 8 }}><img src={img} alt="" style={{ objectFit: 'contain' }} /></div>
                      <SingleImageUpload onUpload={(url) => setFS('home','partners','logos',i,url)} currentUrl={img} />
                      <input value={img} onChange={e => setFS('home','partners','logos',i,e.target.value)} className="admin-input tiny-input" style={{ fontSize: 10, marginTop: 8 }} />
                      <button onClick={() => delFS('home','partners','logos',i)} className="delete-item-btn mini"><Trash2 size={14} /> Remove</button>
                    </div>
                  ))}
                </div>
                <ArrayHeader label="Client Testimonials" onAdd={() => addPA('home','partners','testimonials',{ quote: 'New quote…', author: 'Author Name' })} />
                {(fd.pages.home.partners?.testimonials || []).map((t: any, i: number) => (
                  <div key={i} className="testimonial-edit-box" style={{ marginBottom: 16 }}>
                    <textarea value={t.quote} onChange={e => setPA('home','partners','testimonials',i,'quote',e.target.value)} className="admin-textarea" />
                    <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                      <input value={t.author} onChange={e => setPA('home','partners','testimonials',i,'author',e.target.value)} className="admin-input" placeholder="Author / Role" />
                      <button onClick={() => delPA('home','partners','testimonials',i)} className="delete-item-btn"><Trash2 size={20} /></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Core Sectors Section</h3>
                <div className="admin-grid">
                  <Field label="Badge Text"    value={fd.pages.home.sectors?.badge || ''} onChange={v => setP('home','sectors','badge',v)} />
                  <Field label="Section Title" value={fd.pages.home.sectors?.title || ''} onChange={v => setP('home','sectors','title',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Call to Action</h3>
                <div className="admin-grid">
                  <Field label="CTA Title (\\n = line break)" full area value={fd.pages.home.cta?.title || ''} onChange={v => setP('home','cta','title',v)} />
                  <Field label="CTA Description"             full area value={fd.pages.home.cta?.desc  || ''} onChange={v => setP('home','cta','desc',v)} />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ ABOUT ═══════════════ */}
          {activeTab === 'about' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Title"       full value={fd.pages.about.hero.title} onChange={v => setP('about','hero','title',v)} />
                  <Field label="Hero Description" full area value={fd.pages.about.hero.desc} onChange={v => setP('about','hero','desc',v)} />
                  <ImageField label="Hero Background Image" full value={fd.pages.about.hero.bg || ''} onChange={v => setP('about','hero','bg',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Our Story</h3>
                <div className="admin-grid">
                  <Field label="Story Title"         full      value={fd.pages.about.story.title} onChange={v => setP('about','story','title',v)} />
                  <Field label="Description — Para 1" full area value={fd.pages.about.story.desc1} onChange={v => setP('about','story','desc1',v)} />
                  <Field label="Description — Para 2" full area value={fd.pages.about.story.desc2} onChange={v => setP('about','story','desc2',v)} />
                  <Field label="History Description"  full area value={fd.pages.about.story.historyDesc || ''} onChange={v => setP('about','story','historyDesc',v)} />
                  <Field label="History Quote"        full      value={fd.pages.about.story.historyQuote || ''} onChange={v => setP('about','story','historyQuote',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Reliability at Scale</h3>
                <div className="admin-grid">
                  <Field label="Section Title" value={fd.pages.about.reliability?.title    || ''} onChange={v => setP('about','reliability','title',v)} />
                  <Field label="Subtitle"      value={fd.pages.about.reliability?.subtitle || ''} onChange={v => setP('about','reliability','subtitle',v)} />
                  <Field label="Description"   full area value={fd.pages.about.reliability?.desc || ''} onChange={v => setP('about','reliability','desc',v)} />
                </div>
                <ArrayHeader label="Stats" onAdd={() => addPA('about','reliability','stats',{ val: '0+', label: 'New Stat' })} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 16 }}>
                  {(fd.pages.about.reliability?.stats || []).map((s: any, i: number) => (
                    <div key={i} className="stat-edit-card">
                      <input value={s.val}   onChange={e => setPA('about','reliability','stats',i,'val',e.target.value)}   className="admin-input highlight" placeholder="e.g. 50+" />
                      <input value={s.label} onChange={e => setPA('about','reliability','stats',i,'label',e.target.value)} className="admin-input" placeholder="Label" style={{ marginTop: 8 }} />
                      <button onClick={() => delPA('about','reliability','stats',i)} className="delete-item-btn mini" style={{ marginTop: 8 }}><Trash2 size={14} /> Remove</button>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 32 }}>
                   <label className="field-label" style={{ marginBottom: 16, display: 'block' }}>Operational Grid — Column 1 (3 images)</label>
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                     {(fd.pages.about.reliability?.images || []).map((img: string, i: number) => (
                       <div key={i} className="asset-edit-card">
                         <div className="item-preview-img" style={{ height: 80 }}><img src={img} alt="" /></div>
                         <SingleImageUpload onUpload={(url) => setFS('about','reliability','images',i,url)} currentUrl={img} />
                       </div>
                     ))}
                   </div>
                   
                   <label className="field-label" style={{ marginBottom: 16, marginTop: 24, display: 'block' }}>Operational Grid — Column 2 (3 images)</label>
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                     {(fd.pages.about.reliability?.imagesCol2 || []).map((img: string, i: number) => (
                       <div key={i} className="asset-edit-card">
                         <div className="item-preview-img" style={{ height: 80 }}><img src={img} alt="" /></div>
                         <SingleImageUpload onUpload={(url) => setFS('about','reliability','imagesCol2',i,url)} currentUrl={img} />
                       </div>
                     ))}
                   </div>
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">The Wordcroft Playbook</h3>
                <div className="admin-grid">
                  <Field label="Section Tag"   value={fd.pages.about.playbook?.tag   || ''} onChange={v => setP('about','playbook','tag',v)} />
                  <Field label="Section Title" value={fd.pages.about.playbook?.title || ''} onChange={v => setP('about','playbook','title',v)} />
                  <Field label="Subtitle"      full area value={fd.pages.about.playbook?.sub || ''} onChange={v => setP('about','playbook','sub',v)} />
                </div>
                <ArrayHeader label="Process Steps" onAdd={() => addPA('about','playbook','steps',{ num: String((fd.pages.about.playbook?.steps?.length||0)+1).padStart(2,'0'), label: 'New Step', desc: 'Step description.' })} />
                {(fd.pages.about.playbook?.steps || []).map((s: any, i: number) => (
                  <div key={i} className="collection-item-card" style={{ marginBottom: 16, alignItems: 'center' }}>
                    <div style={{ fontWeight: 800, fontSize: 32, color: 'var(--teal)', width: 60, textAlign: 'center', flexShrink: 0 }}>{s.num}</div>
                    <div className="item-fields">
                      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12 }}>
                        <div><label className="field-label">No.</label><input value={s.num}   onChange={e => setPA('about','playbook','steps',i,'num',e.target.value)}   className="admin-input" /></div>
                        <div><label className="field-label">Label</label><input value={s.label} onChange={e => setPA('about','playbook','steps',i,'label',e.target.value)} className="admin-input highlight" /></div>
                      </div>
                      <input value={s.desc} onChange={e => setPA('about','playbook','steps',i,'desc',e.target.value)} className="admin-input" placeholder="Short description" style={{ marginTop: 8 }} />
                    </div>
                    <button onClick={() => delPA('about','playbook','steps',i)} className="delete-item-btn"><Trash2 size={22} /></button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ MISSION & VALUES ═══════════════ */}
          {activeTab === 'missionValues' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Tag"         value={fd.pages.missionValues.hero.tag}   onChange={v => setP('missionValues','hero','tag',v)} />
                  <Field label="Hero Title"        value={fd.pages.missionValues.hero.title} onChange={v => setP('missionValues','hero','title',v)} />
                  <Field label="Hero Description"  full area value={fd.pages.missionValues.hero.desc} onChange={v => setP('missionValues','hero','desc',v)} />
                  <ImageField label="Hero Background Image" full value={fd.pages.missionValues.hero.bg || ''} onChange={v => setP('missionValues','hero','bg',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Vision & Mission</h3>
                <div className="admin-grid">
                  <Field label="Core Vision"   full area value={fd.pages.missionValues.vision}  onChange={v => setP('missionValues','root','vision',v)} />
                  <Field label="Core Mission"  full area value={fd.pages.missionValues.mission} onChange={v => setP('missionValues','root','mission',v)} />
                </div>
              </div>

              <div className="admin-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid #30363d' }}>
                  <h3 style={{ margin: 0, fontWeight: 700, fontSize: 18, color: 'var(--white)' }}>Core Values</h3>
                  <button onClick={() => { const d = dc(formData!) as any; d.pages.missionValues.values.push({ label: 'New Value', val: 'Description' }); setFormData(d); }} className="add-item-btn" style={{ marginBottom: 0 }}><Plus size={16} /> Add Value</button>
                </div>
                {(fd.pages.missionValues.values || []).map((v: any, i: number) => (
                  <div key={i} className="collection-item-card" style={{ marginBottom: 16 }}>
                    <div className="item-fields">
                      <input value={v.label} onChange={e => { const d = dc(formData!) as any; d.pages.missionValues.values[i].label = e.target.value; setFormData(d); }} className="admin-input highlight" placeholder="Value Name" />
                      <textarea value={v.val} onChange={e => { const d = dc(formData!) as any; d.pages.missionValues.values[i].val = e.target.value; setFormData(d); }} className="admin-textarea" placeholder="Value description" style={{ marginTop: 8 }} />
                    </div>
                    <button onClick={() => { const d = dc(formData!) as any; d.pages.missionValues.values.splice(i, 1); setFormData(d); }} className="delete-item-btn"><Trash2 size={24} /></button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ PARTNERSHIPS ═══════════════ */}
          {activeTab === 'partnerships' && (
            <div className="admin-card">
              <h3 className="admin-card-header">Hero Section</h3>
              <div className="admin-grid">
                <Field label="Hero Tag"        value={fd.pages.partnerships.hero.tag}   onChange={v => setP('partnerships','hero','tag',v)} />
                <Field label="Hero Title"       value={fd.pages.partnerships.hero.title} onChange={v => setP('partnerships','hero','title',v)} />
                <Field label="Hero Description" full area value={fd.pages.partnerships.hero.desc}  onChange={v => setP('partnerships','hero','desc',v)} />
                <ImageField label="Hero Background Image" full value={fd.pages.partnerships.hero.bg || ''} onChange={v => setP('partnerships','hero','bg',v)} />
              </div>
              <div className="full-width"><SectionDivider title="Network Story Section" /></div>
              <div className="admin-grid">
                <Field label="Story Title"       full      value={fd.pages.partnerships.storyTitle || ''} onChange={v => setP('partnerships','root','storyTitle',v)} />
                <Field label="Story Description" full area value={fd.pages.partnerships.storyDesc  || ''} onChange={v => setP('partnerships','root','storyDesc',v)} />
              </div>
            </div>
          )}

          {/* ═══════════════ SUSTAINABILITY ═══════════════ */}
          {activeTab === 'sustainability' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Tag"        value={fd.pages.sustainability.hero.tag}   onChange={v => setP('sustainability','hero','tag',v)} />
                  <Field label="Hero Title"       value={fd.pages.sustainability.hero.title} onChange={v => setP('sustainability','hero','title',v)} />
                  <Field label="Hero Description" full area value={fd.pages.sustainability.hero.desc}  onChange={v => setP('sustainability','hero','desc',v)} />
                  <ImageField label="Hero Background Image" full value={fd.pages.sustainability.hero.bg || ''} onChange={v => setP('sustainability','hero','bg',v)} />
                </div>
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">Impact Section</h3>
                <div className="admin-grid">
                  <Field label="Section Title" full value={fd.pages.sustainability.impact?.title || ''} onChange={v => setP('sustainability','impact','title',v)} />
                  <Field label="Description"   full area value={fd.pages.sustainability.impact?.desc  || ''} onChange={v => setP('sustainability','impact','desc',v)} />
                  <Field label="Badge Text"    value={fd.pages.sustainability.impact?.badge || ''} onChange={v => setP('sustainability','impact','badge',v)} />
                  <Field label="Pull Quote"    full area value={fd.pages.sustainability.impact?.quote || ''} onChange={v => setP('sustainability','impact','quote',v)} />
                </div>

                <ArrayHeader label="Impact Stats" onAdd={() => addPA('sustainability','impact','stats',{ val: '0+', label: 'New Stat' })} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 16, marginBottom: 24 }}>
                  {(fd.pages.sustainability.impact?.stats || []).map((s: any, i: number) => (
                    <div key={i} className="stat-edit-card">
                      <input value={s.val}   onChange={e => setPA('sustainability','impact','stats',i,'val',e.target.value)}   className="admin-input highlight" placeholder="e.g. 20+" />
                      <input value={s.label} onChange={e => setPA('sustainability','impact','stats',i,'label',e.target.value)} className="admin-input" placeholder="Label" style={{ marginTop: 8 }} />
                      <button onClick={() => delPA('sustainability','impact','stats',i)} className="delete-item-btn mini" style={{ marginTop: 8 }}><Trash2 size={14} /> Remove</button>
                    </div>
                  ))}
                </div>

                <ArrayHeader label="Impact Values" onAdd={() => addPA('sustainability','impact','values',{ label: 'New Value', val: 'Description' })} />
                {(fd.pages.sustainability.impact?.values || []).map((v: any, i: number) => (
                  <div key={i} className="collection-item-card" style={{ marginBottom: 12 }}>
                    <div className="item-fields">
                      <input value={v.label} onChange={e => setPA('sustainability','impact','values',i,'label',e.target.value)} className="admin-input highlight" />
                      <input value={v.val}   onChange={e => setPA('sustainability','impact','values',i,'val',e.target.value)}   className="admin-input" style={{ marginTop: 8 }} />
                    </div>
                    <button onClick={() => delPA('sustainability','impact','values',i)} className="delete-item-btn"><Trash2 size={20} /></button>
                  </div>
                ))}
              </div>

              <div className="admin-card">
                <h3 className="admin-card-header">CSR Initiatives</h3>
                <div className="admin-grid" style={{ marginBottom: 24 }}>
                  <Field label="CSR Badge Text" value={fd.pages.sustainability.csr?.badge || ''} onChange={v => setP('sustainability','csr','badge',v)} />
                  <Field label="CSR Title"      value={fd.pages.sustainability.csr?.title || ''} onChange={v => setP('sustainability','csr','title',v)} />
                </div>

                <ArrayHeader label="CSR Cards" onAdd={() => addPA('sustainability','csr','items',{ title: 'New Initiative', desc: 'Description…' })} />
                {(fd.pages.sustainability.csr?.items || []).map((item: any, i: number) => (
                  <div key={i} className="collection-item-card" style={{ marginBottom: 16 }}>
                    <div className="item-fields">
                      <input value={item.title} onChange={e => setPA('sustainability','csr','items',i,'title',e.target.value)} className="admin-input highlight" />
                      <textarea value={item.desc} onChange={e => setPA('sustainability','csr','items',i,'desc',e.target.value)} className="admin-textarea" style={{ marginTop: 8 }} />
                    </div>
                    <button onClick={() => delPA('sustainability','csr','items',i)} className="delete-item-btn"><Trash2 size={24} /></button>
                  </div>
                ))}

                <MultiImageHeader 
                  label="Impact Images" 
                  onAddMultiple={(urls) => {
                    const d = dc(formData!) as any;
                    d.pages.sustainability.csr.impactImages.push(...urls);
                    setFormData(d);
                  }} 
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 16 }}>
                  {(fd.pages.sustainability.csr?.impactImages || []).map((img: string, i: number) => (
                    <div key={i} className="asset-edit-card">
                      <div className="item-preview-img"><img src={img} alt="" /></div>
                      <SingleImageUpload onUpload={(url) => setFS('sustainability','csr','impactImages',i,url)} currentUrl={img} />
                      <input value={img} onChange={e => setFS('sustainability','csr','impactImages',i,e.target.value)} className="admin-input tiny-input" style={{ fontSize: 10, marginTop: 8 }} />
                      <button onClick={() => delFS('sustainability','csr','impactImages',i)} className="delete-item-btn mini"><Trash2 size={14} /> Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ NEWS ═══════════════ */}
          {activeTab === 'news' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Tag"        value={fd.pages.news.hero.tag}   onChange={v => setP('news','hero','tag',v)} />
                  <Field label="Hero Title"       value={fd.pages.news.hero.title} onChange={v => setP('news','hero','title',v)} />
                  <Field label="Hero Description" full area value={fd.pages.news.hero.desc} onChange={v => setP('news','hero','desc',v)} />
                  <ImageField label="Hero Background Image" full value={fd.pages.news.hero.bg || ''} onChange={v => setP('news','hero','bg',v)} />
                </div>
              </div>
              <div className="admin-card">
                <h3 className="admin-card-header">Main Announcement</h3>
                <div className="admin-grid">
                  <Field label="Title"       full value={fd.pages.news.announcement.title} onChange={v => setP('news','announcement','title',v)} />
                  <Field label="Description" full area value={fd.pages.news.announcement.desc} onChange={v => setP('news','announcement','desc',v)} />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ INSIGHTS ═══════════════ */}
          {activeTab === 'insights' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Tag"        value={fd.pages.insights.hero.tag}   onChange={v => setP('insights','hero','tag',v)} />
                  <Field label="Hero Title"       value={fd.pages.insights.hero.title} onChange={v => setP('insights','hero','title',v)} />
                  <Field label="Hero Description" full area value={fd.pages.insights.hero.desc} onChange={v => setP('insights','hero','desc',v)} />
                  <ImageField label="Hero Background Image" full value={fd.pages.insights.hero.bg || ''} onChange={v => setP('insights','hero','bg',v)} />
                </div>
              </div>
              <div className="admin-card">
                <h3 className="admin-card-header">Content Section</h3>
                <div className="admin-grid">
                  <Field label="Title"       full value={fd.pages.insights.content.title} onChange={v => setP('insights','content','title',v)} />
                  <Field label="Description" full area value={fd.pages.insights.content.desc} onChange={v => setP('insights','content','desc',v)} />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ CAREERS ═══════════════ */}
          {activeTab === 'careers' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="admin-card">
                <h3 className="admin-card-header">Hero Section</h3>
                <div className="admin-grid">
                  <Field label="Hero Tag"        value={fd.pages.careers.hero.tag}   onChange={v => setP('careers','hero','tag',v)} />
                  <Field label="Hero Title"       value={fd.pages.careers.hero.title} onChange={v => setP('careers','hero','title',v)} />
                  <Field label="Hero Description" full area value={fd.pages.careers.hero.desc} onChange={v => setP('careers','hero','desc',v)} />
                  <ImageField label="Hero Background Image" full value={fd.pages.careers.hero.bg || ''} onChange={v => setP('careers','hero','bg',v)} />
                </div>
              </div>
              <div className="admin-card">
                <h3 className="admin-card-header">Recruitment Status</h3>
                <div className="admin-grid">
                  <Field label="Status Title"       full value={fd.pages.careers.status.title} onChange={v => setP('careers','status','title',v)} />
                  <Field label="Status Description" full area value={fd.pages.careers.status.desc} onChange={v => setP('careers','status','desc',v)} />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ SERVICES ═══════════════ */}
          {activeTab === 'services' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button onClick={() => addC('services',{ title: 'New Service', desc: 'Service description…', img: '/assets/placeholder.png' })} className="add-item-btn">
                <Plus size={16} /> Add Service Category
              </button>
              {fd.collections.services.map((item: any) => (
                <div key={item.id} className="collection-item-card">
                   <div className="item-fields">
                     <Field label="Service Category" value={item.title} onChange={v => setC('services',item.id,'title',v)} />
                     <Field label="Description" area value={item.desc} onChange={v => setC('services',item.id,'desc',v)} />
                     <ImageField label="Service Icon/Image" value={item.img} onChange={v => setC('services',item.id,'img',v)} />
                   </div>
                   <button onClick={() => delC('services',item.id)} className="delete-item-btn"><Trash2 size={24} /></button>
                </div>
              ))}
            </div>
          )}

          {/* ═══════════════ TEAM ═══════════════ */}
          {activeTab === 'team' && (
            <div className="admin-card">
              <h3 className="admin-card-header"><Users size={20} /> Team Profiles & Biographies</h3>
              <button onClick={() => addC('team',{ name: 'New Team Member', role: 'Role/Position', avatar: '/assets/team/placeholder.png' })} className="add-item-btn">
                <Plus size={16} /> Add Team Profile
              </button>
              {fd.collections.team.map((item: any) => (
                <div key={item.id} className="collection-item-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    <div style={{ width: '120px', flexShrink: 0 }}>
                      <div className="item-preview-img circular" style={{ width: '120px', height: '120px', marginBottom: 16 }}>
                        <img src={item.avatar} alt={item.name} />
                      </div>
                      <SingleImageUpload 
                        onUpload={(url) => setC('team', item.id, 'avatar', url)} 
                        currentUrl={item.avatar}
                      />
                    </div>
                    
                    <div className="item-fields" style={{ flex: 1, minWidth: '300px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <Field 
                          label="Full Name" 
                          value={item.name} 
                          onChange={v => setC('team', item.id, 'name', v)} 
                          placeholder="e.g. John Doe"
                        />
                        <Field 
                          label="Job Title / Role" 
                          value={item.role} 
                          onChange={v => setC('team', item.id, 'role', v)} 
                          placeholder="e.g. Director"
                        />
                      </div>
                      
                      <div style={{ marginTop: 16 }}>
                        <Field 
                          label="LinkedIn Profile URL" 
                          full
                          value={item.linkedIn || '#'} 
                          onChange={v => setC('team', item.id, 'linkedIn', v)} 
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>

                      <div style={{ marginTop: 16 }}>
                        <Field 
                          label="Professional Biography" 
                          full 
                          area 
                          value={item.bio} 
                          onChange={v => setC('team', item.id, 'bio', v)} 
                          placeholder="Explain their background and role at the company..."
                        />
                      </div>
                      
                      <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #333' }}>
                        <label className="field-label" style={{ fontSize: 11, opacity: 0.5 }}>Avatar Asset Path (Manual Overide)</label>
                        <input value={item.avatar} onChange={e => setC('team', item.id, 'avatar', e.target.value)} className="admin-input tiny-input" style={{ fontSize: '11px' }} />
                      </div>
                    </div>
                    
                    <button onClick={() => delC('team', item.id)} className="delete-item-btn" style={{ alignSelf: 'flex-start' }}>
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ═══════════════ NEWS ARTICLES ═══════════════ */}
          {activeTab === ('news_col' as any) && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="admin-card">
                 <h3 className="admin-card-header"><FileText size={20} /> News Feed Items</h3>
                 <button onClick={() => addC('news',{ title: 'New News Article', date: new Date().toLocaleDateString(), excerpt: 'Summary...', content: 'Full body...', img: '/assets/placeholder.png' })} className="add-item-btn">
                   <Plus size={16} /> Create News Article
                 </button>
                 {fd.collections.news.map((item: any) => (
                   <div key={item.id} className="collection-item-card" style={{ padding: '24px' }}>
                      <div className="item-preview-img" style={{ width: 140, height: 100 }}>
                        <img src={item.img} alt="" />
                      </div>
                      <div className="item-fields" style={{ flex: 1 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: 16 }}>
                           <Field label="Article Title" value={item.title} onChange={v => setC('news', item.id, 'title', v)} />
                           <Field label="Date" value={item.date} onChange={v => setC('news', item.id, 'date', v)} />
                        </div>
                        <Field label="Excerpt (Short Summary)" area value={item.excerpt} onChange={v => setC('news', item.id, 'excerpt', v)} />
                        <Field label="Full Content / Body" area value={item.content} onChange={v => setC('news', item.id, 'content', v)} />
                        <ImageField label="Cover Image" value={item.img} onChange={v => setC('news', item.id, 'img', v)} />
                      </div>
                      <button onClick={() => delC('news',item.id)} className="delete-item-btn"><Trash2 size={24} /></button>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* ═══════════════ INSIGHTS POSTS ═══════════════ */}
          {activeTab === ('insights_col' as any) && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="admin-card">
                 <h3 className="admin-card-header"><Globe size={20} /> Insights & Analysis</h3>
                 <button onClick={() => addC('insights',{ title: 'New Insight Post', date: new Date().toLocaleDateString(), excerpt: 'Summary...', content: 'Full body...', img: '/assets/placeholder.png' })} className="add-item-btn">
                   <Plus size={16} /> Create Insight Post
                 </button>
                 {fd.collections.insights.map((item: any) => (
                   <div key={item.id} className="collection-item-card" style={{ padding: '24px' }}>
                      <div className="item-preview-img" style={{ width: 140, height: 100 }}>
                        <img src={item.img} alt="" />
                      </div>
                      <div className="item-fields" style={{ flex: 1 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: 16 }}>
                           <Field label="Post Title" value={item.title} onChange={v => setC('insights', item.id, 'title', v)} />
                           <Field label="Date" value={item.date} onChange={v => setC('insights', item.id, 'date', v)} />
                        </div>
                        <Field label="Excerpt" area value={item.excerpt} onChange={v => setC('insights', item.id, 'excerpt', v)} />
                        <Field label="Analysis / Body" area value={item.content} onChange={v => setC('insights', item.id, 'content', v)} />
                        <ImageField label="Cover Image" value={item.img} onChange={v => setC('insights', item.id, 'img', v)} />
                      </div>
                      <button onClick={() => delC('insights',item.id)} className="delete-item-btn"><Trash2 size={24} /></button>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* ═══════════════ FAQS ═══════════════ */}
          {activeTab === 'faqs' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button onClick={() => addC('faqs',{ question: 'New Question', answer: 'Answer details…' })} className="add-item-btn">
                <Plus size={16} /> Add FAQ Entry
              </button>
              {fd.collections.faqs.map((item: any) => (
                <div key={item.id} className="collection-item-card">
                  <div className="item-fields">
                    <input value={item.question} onChange={e => setC('faqs',item.id,'question',e.target.value)} className="admin-input highlight" placeholder="Question" />
                    <textarea value={item.answer} onChange={e => setC('faqs',item.id,'answer',e.target.value)} className="admin-textarea" placeholder="Answer" />
                  </div>
                  <button onClick={() => delC('faqs',item.id)} className="delete-item-btn"><Trash2 size={24} /></button>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

// ── Small reusable form components ──────────────────────────────────────────
function Field({ label, value, onChange, full, area, placeholder }: {
  label: string; value: string; onChange: (v: string) => void;
  full?: boolean; area?: boolean; placeholder?: string;
}) {
  const cls = `field-group${full ? ' full-width' : ''}`;
  return (
    <div className={cls}>
      <label className="field-label">{label}</label>
      {area
        ? <textarea value={value} onChange={e => onChange(e.target.value)} className="admin-textarea" placeholder={placeholder} />
        : <input    value={value} onChange={e => onChange(e.target.value)} className="admin-input"    placeholder={placeholder} />}
    </div>
  );
}

function ImageField({ label, value, onChange, full }: { label: string; value: string; onChange: (v: string) => void; full?: boolean }) {
  const cls = `field-group${full ? ' full-width' : ''}`;
  return (
    <div className={cls} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
      <label className="field-label" style={{ marginBottom: 12, display: 'block' }}>{label}</label>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ width: 80, height: 60, borderRadius: 8, overflow: 'hidden', background: '#000', border: '1px solid #333', flexShrink: 0 }}>
          <img src={value} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 1 }}>
          <SingleImageUpload onUpload={onChange} currentUrl={value} />
          <div style={{ marginTop: 8 }}>
            <label className="field-label" style={{ fontSize: 10, opacity: 0.5, marginBottom: 4 }}>Manual Path / URL</label>
            <input value={value} onChange={e => onChange(e.target.value)} className="admin-input tiny-input" style={{ fontSize: 11 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrayHeader({ label, onAdd }: { label: string; onAdd: () => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
      <span className="field-label">{label}</span>
      <button onClick={onAdd} className="add-item-btn" style={{ marginBottom: 0 }}>
        <Plus size={16} /> Add
      </button>
    </div>
  );
}

function MultiImageHeader({ label, onAddMultiple }: { label: string; onAddMultiple: (urls: string[]) => void }) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);
    const formData = new FormData();
    files.forEach(file => formData.append('files[]', file));

    try {
      // 1. Try local Node desktop server first
      let response;
      try {
        response = await fetch('http://localhost:3001/api/upload', { method: 'POST', body: formData });
      } catch (e) {
        // Local node not running, that's fine
      }

      // 2. If node fails or wasn't found, try relative PHP endpoint (Live cPanel)
      if (!response || !response.ok) {
        response = await fetch('/php-backend/upload.php', { method: 'POST', body: formData });
      }

      if (response.ok) {
        const data = await response.json();
        onAddMultiple(data.urls);
      } else {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Server upload failed');
      }
    } catch (err) {
      console.error('Image upload failed:', err);
      alert("Upload failed. Ensure the server is online and you have a stable connection.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
      <span className="field-label">{label}</span>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {isUploading && <span style={{ fontSize: '12px', color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: 6 }}><Save size={14} className="spin" /> Uploading...</span>}
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="add-item-btn"
          disabled={isUploading}
          style={{ 
            marginBottom: 0, 
            background: isUploading ? 'rgba(255,255,255,0.05)' : 'var(--teal)', 
            color: isUploading ? 'var(--gray)' : 'var(--navy)',
            transform: isUploading ? 'none' : undefined
          }}
        >
          {isUploading ? 'Busy...' : <><Plus size={16} /> Bulk Upload Images</>}
        </button>
      </div>
    </div>
  );
}

function SingleImageUpload({ onUpload, currentUrl }: { onUpload: (url: string) => void; currentUrl: string }) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('files[]', file);

    try {
      let response;
      try {
        response = await fetch('http://localhost:3001/api/upload', { method: 'POST', body: formData });
      } catch (e) {}

      if (!response || !response.ok) {
        response = await fetch('/php-backend/upload.php', { method: 'POST', body: formData });
      }

      if (response.ok) {
        const data = await response.json();
        onUpload(data.urls[0]);
      } else { throw new Error('Upload failed'); }
    } catch (err) {
      console.error('Upload failed:', err);
      alert("Failed to upload image. Please check your connection.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="single-upload-wrap">
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
      <button 
        onClick={() => fileInputRef.current?.click()} 
        className="add-item-btn tiny-btn" 
        disabled={isUploading}
        style={{ width: '100%', fontSize: '11px', padding: '6px' }}
      >
        {isUploading ? '...' : (currentUrl ? 'Change Photo' : 'Upload Photo')}
      </button>
    </div>
  );
}

function SectionDivider({ title }: { title: string }) {
  return <h3 style={{ borderTop: '1px solid #30363d', paddingTop: 16, marginTop: 8, fontSize: 15, fontWeight: 700, color: '#8b949e' }}>{title}</h3>;
}

