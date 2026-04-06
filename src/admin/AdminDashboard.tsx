import React, { useState } from 'react';
import { useCMS, type CMSContent } from '../CMSContext';
import { 
  Settings, 
  Layout, 
  Users, 
  Package, 
  Save, 
  LogOut, 
  Plus, 
  Trash2, 
  CheckCircle,
  AlertCircle,
  Menu,
  X,
  ChevronRight,
  Globe,
  Home,
  ShieldCheck
} from 'lucide-react';

export default function AdminDashboard() {
  const { content, updateContent, isLoading } = useCMS();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'global' | 'home' | 'services' | 'team'>('global');
  const [formData, setFormData] = useState<CMSContent | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  // Initialize form data when content is loaded
  React.useEffect(() => {
    if (content) {
      setFormData(JSON.parse(JSON.stringify(content))); // Deep clone
    }
  }, [content]);

  if (isLoading || !formData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0c10', color: '#fff' }}>
        <div className="loader">Loading Admin Panel...</div>
      </div>
    );
  }

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      try {
        updateContent(formData);
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
      } catch (e) {
        setSaveStatus('error');
      }
    }, 800);
  };

  const updateGlobalField = (section: string, field: string, value: string) => {
     const newData = { ...formData };
     if (section === 'root') {
        (newData.global as any)[field] = value;
     } else {
        (newData.global as any)[section][field] = value;
     }
     setFormData(newData);
  };

  const updatePageField = (pageName: string, section: string, field: string, value: string) => {
    const newData = { ...formData };
    newData.pages[pageName][section][field] = value;
    setFormData(newData);
  };

  const updateCollectionItem = (collection: keyof CMSContent['collections'], id: string, field: string, value: string) => {
    const newData = { ...formData };
    const idx = newData.collections[collection].findIndex((item: any) => item.id === id);
    if (idx !== -1) {
      newData.collections[collection][idx][field] = value;
      setFormData(newData);
    }
  };

  const addCollectionItem = (collection: keyof CMSContent['collections'], defaultItem: any) => {
    const newData = { ...formData };
    newData.collections[collection].push({ ...defaultItem, id: Date.now().toString() });
    setFormData(newData);
  };

  const removeCollectionItem = (collection: keyof CMSContent['collections'], id: string) => {
    const newData = { ...formData };
    newData.collections[collection] = newData.collections[collection].filter((item: any) => item.id !== id);
    setFormData(newData);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0d1117', color: '#e6edf3', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: isSidebarOpen ? '280px' : '80px', 
        background: '#161b22', 
        borderRight: '1px solid #30363d',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 100
      }}>
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center' }}>
          {isSidebarOpen && <span style={{ fontWeight: 800, fontSize: '18px', color: '#58a6ff', letterSpacing: '-0.5px' }}>AdminPanel</span>}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer' }}>
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav style={{ flex: 1, padding: '12px' }}>
          {[
            { id: 'global', icon: Globe, label: 'Global Settings' },
            { id: 'home', icon: Home, label: 'Home Page' },
            { id: 'services', icon: Package, label: 'Services' },
            { id: 'team', icon: Users, label: 'Team Members' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '8px',
                background: activeTab === tab.id ? '#1f6feb' : 'transparent',
                color: activeTab === tab.id ? '#fff' : '#8b949e',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '4px',
                transition: '0.2s',
                justifyContent: isSidebarOpen ? 'flex-start' : 'center'
              }}
            >
              <tab.icon size={20} />
              {isSidebarOpen && <span>{tab.label}</span>}
            </button>
          ))}
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid #30363d' }}>
           <button style={{ 
             width: '100%', 
             display: 'flex', 
             alignItems: 'center', 
             gap: '12px', 
             color: '#f85149', 
             background: 'none', 
             border: 'none', 
             cursor: 'pointer',
             justifyContent: isSidebarOpen ? 'flex-start' : 'center'
           }}>
             <LogOut size={20} />
             {isSidebarOpen && <span>Logout</span>}
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 600, margin: 0 }}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h1>
            <p style={{ color: '#8b949e', marginTop: '4px' }}>Edit your website content in real-time.</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
            style={{ 
              background: saveStatus === 'success' ? '#238636' : '#1f6feb', 
              color: '#fff', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontWeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? <><CheckCircle size={18} /> Saved</> : <><Save size={18} /> Save Changes</>}
          </button>
        </header>

        <div style={{ maxWidth: '900px' }}>
           {activeTab === 'global' && (
             <div className="admin-card" style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '32px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '24px', borderBottom: '1px solid #30363d', paddingBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={20} color="#58a6ff" /> General Information</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                   <div className="field-group">
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Company Name</label>
                      <input 
                        value={formData.global.companyName} 
                        onChange={(e) => updateGlobalField('root', 'companyName', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                      />
                   </div>
                   <div className="field-group">
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Logo URL</label>
                      <input 
                        value={formData.global.logo} 
                        onChange={(e) => updateGlobalField('root', 'logo', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                      />
                   </div>
                </div>

                <h3 style={{ marginBottom: '24px', borderBottom: '1px solid #30363d', paddingBottom: '12px' }}>Contacts</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                   <div className="field-group">
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Email</label>
                      <input 
                        value={formData.global.contact.email} 
                        onChange={(e) => updateGlobalField('contact', 'email', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                      />
                   </div>
                   <div className="field-group">
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Phone</label>
                      <input 
                        value={formData.global.contact.phone} 
                        onChange={(e) => updateGlobalField('contact', 'phone', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                      />
                   </div>
                   <div className="field-group" style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Address</label>
                      <textarea 
                        value={formData.global.contact.address} 
                        onChange={(e) => updateGlobalField('contact', 'address', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', minHeight: '80px' }}
                      />
                   </div>
                </div>
             </div>
           )}

           {activeTab === 'home' && (
             <div className="admin-card" style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '32px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '24px', borderBottom: '1px solid #30363d', paddingBottom: '12px' }}>Hero Section</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                   <div className="field-group">
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Main Title (use \n for line break)</label>
                      <textarea 
                        value={formData.pages.home.hero.title} 
                        onChange={(e) => updatePageField('home', 'hero', 'title', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', fontSize: '24px', fontWeight: 600 }}
                      />
                   </div>
                   <div className="field-group">
                      <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Subtitle</label>
                      <input 
                        value={formData.pages.home.hero.subtitle} 
                        onChange={(e) => updatePageField('home', 'hero', 'subtitle', e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                      />
                   </div>
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                      <div className="field-group">
                        <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Primary Button Text</label>
                        <input 
                          value={formData.pages.home.hero.primaryBtn} 
                          onChange={(e) => updatePageField('home', 'hero', 'primaryBtn', e.target.value)}
                          style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                      <div className="field-group">
                        <label style={{ display: 'block', fontSize: '14px', color: '#8b949e', marginBottom: '8px' }}>Secondary Button Text</label>
                        <input 
                          value={formData.pages.home.hero.secondaryBtn} 
                          onChange={(e) => updatePageField('home', 'hero', 'secondaryBtn', e.target.value)}
                          style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }}
                        />
                      </div>
                   </div>
                </div>
             </div>
           )}

           {activeTab === 'services' && (
             <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <button 
                  onClick={() => addCollectionItem('services', { title: 'New Service', desc: 'Service description here...', img: '/assets/placeholder.png' })}
                  style={{ alignSelf: 'flex-end', background: '#238636', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Plus size={16} /> Add Service
                </button>
                
                {formData.collections.services.map((item: any) => (
                  <div key={item.id} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '24px', display: 'flex', gap: '20px' }}>
                    <div style={{ width: '140px', height: '100px', background: '#0d1117', borderRadius: '8px', overflow: 'hidden' }}>
                       <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                       <input 
                         value={item.title} 
                         onChange={(e) => updateCollectionItem('services', item.id, 'title', e.target.value)}
                         style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #30363d', color: '#fff', fontSize: '18px', fontWeight: 600, padding: '4px 0' }}
                       />
                       <textarea 
                         value={item.desc} 
                         onChange={(e) => updateCollectionItem('services', item.id, 'desc', e.target.value)}
                         style={{ background: 'transparent', border: 'none', color: '#8b949e', resize: 'none', fontSize: '14px' }}
                       />
                       <input 
                         value={item.img} 
                         onChange={(e) => updateCollectionItem('services', item.id, 'img', e.target.value)}
                         placeholder="Image Path"
                         style={{ background: '#0d1117', border: '1px solid #30363d', color: '#8b949e', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' }}
                       />
                    </div>
                    <button 
                      onClick={() => removeCollectionItem('services', item.id)}
                      style={{ color: '#f85149', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
             </div>
           )}

           {activeTab === 'team' && (
             <div style={{ textAlign: 'center', padding: '60px', background: '#161b22', borderRadius: '12px', border: '1px solid #30363d' }}>
                <Users size={48} color="#8b949e" style={{ marginBottom: '16px' }} />
                <h3>Team Management Coming Soon</h3>
                <p style={{ color: '#8b949e' }}>The team module is under active development.</p>
             </div>
           )}
        </div>
      </main>
    </div>
  );
}
