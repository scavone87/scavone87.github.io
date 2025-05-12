<script lang="ts">
  // Design System Generator App Demo
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Definizione delle interfacce
  interface ColorShade {
    shade: string;
    hex: string;
  }

  interface ColorPalette {
    name: string;
    baseColor: string;
    shades: ColorShade[];
  }

  interface TypographyScale {
    name: string;
    fontFamily: string;
    sizes: {
      name: string;
      size: string;
      lineHeight: string;
      fontWeight: number;
    }[];
  }

  interface Spacing {
    name: string;
    value: string;
    description?: string;
  }

  interface BorderRadius {
    name: string;
    value: string;
    description?: string;
  }

  interface DesignToken {
    type: 'color' | 'typography' | 'spacing' | 'radius';
    name: string;
    value: string;
    description?: string;
  }

  // Stato dell'applicazione
  let colorPalettes: ColorPalette[] = [
    {
      name: 'Primary',
      baseColor: '#3772FF',
      shades: [
        { shade: '50', hex: '#EDF2FF' },
        { shade: '100', hex: '#D0DCFF' },
        { shade: '200', hex: '#B3C7FF' },
        { shade: '300', hex: '#8DA8FF' },
        { shade: '400', hex: '#6B8FFF' },
        { shade: '500', hex: '#3772FF' },
        { shade: '600', hex: '#2E5ECC' },
        { shade: '700', hex: '#254A99' },
        { shade: '800', hex: '#1C3B73' },
        { shade: '900', hex: '#132646' }
      ]
    },
    {
      name: 'Secondary',
      baseColor: '#F46036',
      shades: [
        { shade: '50', hex: '#FEF0ED' },
        { shade: '100', hex: '#FDDBD2' },
        { shade: '200', hex: '#FCC5B6' },
        { shade: '300', hex: '#FA9D85' },
        { shade: '400', hex: '#F77F5F' },
        { shade: '500', hex: '#F46036' },
        { shade: '600', hex: '#C34D2B' },
        { shade: '700', hex: '#923A21' },
        { shade: '800', hex: '#6E2C19' },
        { shade: '900', hex: '#491D10' }
      ]
    }
  ];

  let typographyScales: TypographyScale[] = [
    {
      name: 'Headings',
      fontFamily: '"Inter", sans-serif',
      sizes: [
        { name: 'h1', size: '2.5rem', lineHeight: '1.2', fontWeight: 700 },
        { name: 'h2', size: '2rem', lineHeight: '1.25', fontWeight: 700 },
        { name: 'h3', size: '1.75rem', lineHeight: '1.3', fontWeight: 600 },
        { name: 'h4', size: '1.5rem', lineHeight: '1.35', fontWeight: 600 },
        { name: 'h5', size: '1.25rem', lineHeight: '1.4', fontWeight: 600 },
        { name: 'h6', size: '1rem', lineHeight: '1.45', fontWeight: 600 }
      ]
    },
    {
      name: 'Body',
      fontFamily: '"Inter", sans-serif',
      sizes: [
        { name: 'lg', size: '1.125rem', lineHeight: '1.5', fontWeight: 400 },
        { name: 'md', size: '1rem', lineHeight: '1.5', fontWeight: 400 },
        { name: 'sm', size: '0.875rem', lineHeight: '1.5', fontWeight: 400 },
        { name: 'xs', size: '0.75rem', lineHeight: '1.5', fontWeight: 400 }
      ]
    }
  ];

  let spacingScale: Spacing[] = [
    { name: 'xs', value: '0.25rem', description: '4px - Spacing elementi molto vicini' },
    { name: 'sm', value: '0.5rem', description: '8px - Spacing elementi vicini' },
    { name: 'md', value: '1rem', description: '16px - Spacing standard' },
    { name: 'lg', value: '1.5rem', description: '24px - Spacing gruppi di elementi' },
    { name: 'xl', value: '2rem', description: '32px - Spacing tra sezioni' },
    { name: '2xl', value: '3rem', description: '48px - Spacing tra sezioni principali' },
    { name: '3xl', value: '4rem', description: '64px - Spacing tra sezioni maggiori' }
  ];

  let borderRadiuses: BorderRadius[] = [
    { name: 'none', value: '0', description: 'Nessun arrotondamento' },
    { name: 'sm', value: '0.25rem', description: '4px - Arrotondamento minimo' },
    { name: 'md', value: '0.5rem', description: '8px - Arrotondamento standard' },
    { name: 'lg', value: '1rem', description: '16px - Arrotondamento accentuato' },
    { name: 'xl', value: '1.5rem', description: '24px - Arrotondamento significativo' },
    { name: 'full', value: '9999px', description: 'Arrotondamento completo (cerchio/pillola)' }
  ];

  // Stato dell'interfaccia utente
  let activeTab = 'colors';
  let editingPalette: ColorPalette | null = null;
  let newPaletteName = '';
  let newPaletteBaseColor = '#000000';
  let exportFormat = 'css';
  let toastMessage = '';
  let showToast = false;

  // Funzione per generare le sfumature di un colore
  const generateShades = (baseColor: string): ColorShade[] => {
    // Funzione semplificata che simula la generazione di sfumature
    // In un'implementazione reale si utilizzerebbe una libreria di manipolazione colori come chroma.js
    
    // Convertiamo il colore in formato esadecimale in RGB
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    
    const shades: ColorShade[] = [];
    
    // Generiamo 10 sfumature dal più chiaro al più scuro
    const shadeNames = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    
    for (let i = 0; i < 10; i++) {
      // Calcoliamo un fattore di luminosità che va da 0.9 (chiaro) a 0.1 (scuro)
      const factor = 0.9 - (i * 0.08);
      
      // Applichiamo il fattore ai componenti RGB
      let newR = Math.min(255, Math.round(r + (255 - r) * (1 - factor)));
      let newG = Math.min(255, Math.round(g + (255 - g) * (1 - factor)));
      let newB = Math.min(255, Math.round(b + (255 - b) * (1 - factor)));
      
      if (i >= 5) {
        // Per le sfumature più scure, diminuiamo i valori RGB
        const darkFactor = 1 - ((i - 4) * 0.15);
        newR = Math.max(0, Math.round(r * darkFactor));
        newG = Math.max(0, Math.round(g * darkFactor));
        newB = Math.max(0, Math.round(b * darkFactor));
      }
      
      // Convertiamo i valori RGB in esadecimale
      const hexColor = '#' + 
        newR.toString(16).padStart(2, '0') + 
        newG.toString(16).padStart(2, '0') + 
        newB.toString(16).padStart(2, '0');
      
      shades.push({
        shade: shadeNames[i],
        hex: hexColor
      });
    }
    
    return shades;
  };

  // Funzione per aggiungere una nuova palette
  const addNewPalette = () => {
    if (!newPaletteName.trim()) {
      showToastMessage('Inserisci un nome per la palette');
      return;
    }
    
    const newPalette: ColorPalette = {
      name: newPaletteName,
      baseColor: newPaletteBaseColor,
      shades: generateShades(newPaletteBaseColor)
    };
    
    colorPalettes = [...colorPalettes, newPalette];
    
    // Reset del form
    newPaletteName = '';
    newPaletteBaseColor = '#000000';
    
    showToastMessage('Palette aggiunta con successo');
  };

  // Funzione per mostrare un messaggio toast
  const showToastMessage = (message: string) => {
    toastMessage = message;
    showToast = true;
    
    setTimeout(() => {
      showToast = false;
    }, 3000);
  };

  // Gestione dell'editing di una palette
  const startEditingPalette = (palette: ColorPalette) => {
    editingPalette = { ...palette };
  };

  const updateEditingPalette = () => {
    if (!editingPalette) return;
    
    // Aggiorna le sfumature in base al nuovo colore base
    editingPalette.shades = generateShades(editingPalette.baseColor);
  };

  const saveEditingPalette = () => {
    if (!editingPalette) return;
    
    colorPalettes = colorPalettes.map(p => 
      p.name === editingPalette!.name ? editingPalette! : p
    );
    
    editingPalette = null;
    showToastMessage('Palette aggiornata con successo');
  };

  const cancelEditingPalette = () => {
    editingPalette = null;
  };

  // Funzione per eliminare una palette
  const deletePalette = (name: string) => {
    colorPalettes = colorPalettes.filter(p => p.name !== name);
    showToastMessage('Palette eliminata');
  };

  // Funzione per copiare un colore negli appunti
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        showToastMessage('Copiato negli appunti: ' + text);
      })
      .catch(err => {
        console.error('Errore nella copia: ', err);
      });
  };

  // Genera il codice CSS per l'esportazione
  const generateCSSVariables = (): string => {
    let css = `:root {\n`;
    
    // Colori
    colorPalettes.forEach(palette => {
      css += `  /* ${palette.name} Color Palette */\n`;
      palette.shades.forEach(shade => {
        css += `  --color-${palette.name.toLowerCase()}-${shade.shade}: ${shade.hex};\n`;
      });
      css += `\n`;
    });
    
    // Typography
    css += `  /* Typography */\n`;
    typographyScales.forEach(scale => {
      css += `  --font-family-${scale.name.toLowerCase()}: ${scale.fontFamily};\n`;
      scale.sizes.forEach(size => {
        css += `  --font-size-${scale.name.toLowerCase()}-${size.name}: ${size.size};\n`;
        css += `  --line-height-${scale.name.toLowerCase()}-${size.name}: ${size.lineHeight};\n`;
        css += `  --font-weight-${scale.name.toLowerCase()}-${size.name}: ${size.fontWeight};\n`;
      });
      css += `\n`;
    });
    
    // Spacing
    css += `  /* Spacing */\n`;
    spacingScale.forEach(space => {
      css += `  --spacing-${space.name}: ${space.value}; /* ${space.description} */\n`;
    });
    css += `\n`;
    
    // Border Radius
    css += `  /* Border Radius */\n`;
    borderRadiuses.forEach(radius => {
      css += `  --radius-${radius.name}: ${radius.value}; /* ${radius.description} */\n`;
    });
    
    css += `}\n`;
    return css;
  };

  // Genera il codice SCSS per l'esportazione
  const generateSCSSVariables = (): string => {
    let scss = `// Design System Variables\n\n`;
    
    // Colori
    scss += `// Color Palettes\n`;
    colorPalettes.forEach(palette => {
      scss += `// ${palette.name} Colors\n`;
      scss += `$color-${palette.name.toLowerCase()}: (\n`;
      palette.shades.forEach(shade => {
        scss += `  "${shade.shade}": ${shade.hex},\n`;
      });
      scss += `);\n\n`;
    });
    
    // Typography
    scss += `// Typography\n`;
    typographyScales.forEach(scale => {
      scss += `$font-family-${scale.name.toLowerCase()}: ${scale.fontFamily};\n\n`;
      scss += `$font-size-${scale.name.toLowerCase()}: (\n`;
      scale.sizes.forEach(size => {
        scss += `  "${size.name}": ${size.size},\n`;
      });
      scss += `);\n\n`;
      
      scss += `$line-height-${scale.name.toLowerCase()}: (\n`;
      scale.sizes.forEach(size => {
        scss += `  "${size.name}": ${size.lineHeight},\n`;
      });
      scss += `);\n\n`;
      
      scss += `$font-weight-${scale.name.toLowerCase()}: (\n`;
      scale.sizes.forEach(size => {
        scss += `  "${size.name}": ${size.fontWeight},\n`;
      });
      scss += `);\n\n`;
    });
    
    // Spacing
    scss += `// Spacing\n`;
    scss += `$spacing: (\n`;
    spacingScale.forEach(space => {
      scss += `  "${space.name}": ${space.value}, // ${space.description}\n`;
    });
    scss += `);\n\n`;
    
    // Border Radius
    scss += `// Border Radius\n`;
    scss += `$radius: (\n`;
    borderRadiuses.forEach(radius => {
      scss += `  "${radius.name}": ${radius.value}, // ${radius.description}\n`;
    });
    scss += `);\n`;
    
    return scss;
  };

  // Genera JSON per l'esportazione
  const generateJSON = (): string => {
    const designSystem = {
      colors: colorPalettes.map(palette => ({
        name: palette.name,
        baseColor: palette.baseColor,
        shades: palette.shades
      })),
      typography: typographyScales.map(scale => ({
        name: scale.name,
        fontFamily: scale.fontFamily,
        sizes: scale.sizes
      })),
      spacing: spacingScale,
      borderRadius: borderRadiuses
    };
    
    return JSON.stringify(designSystem, null, 2);
  };

  // Funzione per esportare il design system
  const exportDesignSystem = () => {
    let exportContent = '';
    let fileExtension = '';
    let mimeType = '';
    
    if (exportFormat === 'css') {
      exportContent = generateCSSVariables();
      fileExtension = 'css';
      mimeType = 'text/css';
    } else if (exportFormat === 'scss') {
      exportContent = generateSCSSVariables();
      fileExtension = 'scss';
      mimeType = 'text/plain';
    } else if (exportFormat === 'json') {
      exportContent = generateJSON();
      fileExtension = 'json';
      mimeType = 'application/json';
    }
    
    // Creazione del blob e download del file
    const blob = new Blob([exportContent], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `design-system.${fileExtension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToastMessage(`Design system esportato in formato ${exportFormat.toUpperCase()}`);
  };

  // Effetto per caricare/salvare i dati dal localStorage
  onMount(() => {
    // Carica i dati dal localStorage se disponibili
    const savedData = localStorage.getItem('designSystem');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        colorPalettes = data.colors || colorPalettes;
        typographyScales = data.typography || typographyScales;
        spacingScale = data.spacing || spacingScale;
        borderRadiuses = data.borderRadius || borderRadiuses;
      } catch (error) {
        console.error('Errore nel caricamento dei dati salvati:', error);
      }
    }
  });

  // Salva i dati nel localStorage quando cambiano
  const saveToLocalStorage = () => {
    const data = {
      colors: colorPalettes,
      typography: typographyScales,
      spacing: spacingScale,
      borderRadius: borderRadiuses
    };
    
    localStorage.setItem('designSystem', JSON.stringify(data));
    showToastMessage('Design system salvato localmente');
  };
</script>

<svelte:head>
  <title>Design System Generator - Rocco Scavone</title>
  <meta name="description" content="Strumento per creare e gestire sistemi di design completi">
</svelte:head>

<section class="app-container">
  <div class="app-header">
    <h1>Design System Generator</h1>
    <p class="app-description">Crea, gestisci ed esporta il tuo sistema di design personalizzato</p>
  </div>

  <!-- Tabs di navigazione -->
  <div class="tabs-container">
    <div class="tabs">
      <button 
        class="tab-button" 
        class:active={activeTab === 'colors'} 
        on:click={() => activeTab = 'colors'}
      >
        <span class="tab-icon">🎨</span>
        Colori
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'typography'} 
        on:click={() => activeTab = 'typography'}
      >
        <span class="tab-icon">Aa</span>
        Tipografia
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'spacing'} 
        on:click={() => activeTab = 'spacing'}
      >
        <span class="tab-icon">↔️</span>
        Spacing
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'radius'} 
        on:click={() => activeTab = 'radius'}
      >
        <span class="tab-icon">⚪</span>
        Bordi
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'export'} 
        on:click={() => activeTab = 'export'}
      >
        <span class="tab-icon">📤</span>
        Esporta
      </button>
    </div>
  </div>

  <!-- Contenuto principale -->
  <div class="tab-content">
    <!-- Sezione Colori -->
    {#if activeTab === 'colors'}
      <div class="tab-section">
        <div class="section-header">
          <h2>Palette di Colori</h2>
          <p>Crea e gestisci le palette di colori del tuo design system.</p>
        </div>

        <!-- Aggiungi nuova palette -->
        <div class="add-palette-form">
          <div class="form-row">
            <div class="form-group">
              <label for="newPaletteName">Nome Palette</label>
              <input 
                type="text" 
                id="newPaletteName" 
                bind:value={newPaletteName} 
                placeholder="es. Accent, Neutral, etc."
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="newPaletteBaseColor">Colore Base</label>
              <div class="color-input-container">
                <input 
                  type="color" 
                  id="newPaletteBaseColor" 
                  bind:value={newPaletteBaseColor}
                  class="color-picker"
                />
                <input 
                  type="text" 
                  bind:value={newPaletteBaseColor} 
                  class="color-text"
                />
              </div>
            </div>
            <div class="form-action">
              <button on:click={addNewPalette} class="btn btn-primary">
                Aggiungi Palette
              </button>
            </div>
          </div>
        </div>

        <!-- Palette di colori esistenti -->
        <div class="palettes-container">
          {#each colorPalettes as palette}
            <div class="palette-card">
              <div class="palette-header">
                <h3>{palette.name}</h3>
                <div class="palette-actions">
                  <button on:click={() => startEditingPalette(palette)} class="btn-icon" title="Modifica">
                    ✏️
                  </button>
                  <button on:click={() => deletePalette(palette.name)} class="btn-icon" title="Elimina">
                    🗑️
                  </button>
                </div>
              </div>
              <div class="color-shades">
                {#each palette.shades as shade}
                  <button
                    type="button"
                    class="color-swatch"
                    style="background-color: {shade.hex}"
                    on:click={() => copyToClipboard(shade.hex)}
                    on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { copyToClipboard(shade.hex); } }}
                    title="Clicca per copiare il colore"
                    aria-label="Copia il colore {shade.hex}"
                  >
                    <span class="shade-name">{shade.shade}</span>
                    <span class="shade-hex">{shade.hex}</span>
                  </button>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Sezione Tipografia -->
    {#if activeTab === 'typography'}
      <div class="tab-section">
        <div class="section-header">
          <h2>Scale Tipografiche</h2>
          <p>Definisci i font, le dimensioni e gli stili per il tuo design system.</p>
        </div>

        {#each typographyScales as scale}
          <div class="typography-scale">
            <h3>{scale.name}</h3>
            <p class="font-family">Font Family: <span>{scale.fontFamily}</span></p>
            
            <div class="typography-samples">
              {#each scale.sizes as size}
                <div class="type-sample">
                  <div class="type-preview" style="font-family: {scale.fontFamily}; font-size: {size.size}; line-height: {size.lineHeight}; font-weight: {size.fontWeight};">
                    {size.name} - Abc123
                  </div>
                  <div class="type-details">
                    <div class="type-detail">Size: <span>{size.size}</span></div>
                    <div class="type-detail">Line Height: <span>{size.lineHeight}</span></div>
                    <div class="type-detail">Weight: <span>{size.fontWeight}</span></div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Sezione Spacing -->
    {#if activeTab === 'spacing'}
      <div class="tab-section">
        <div class="section-header">
          <h2>Scale di Spacing</h2>
          <p>Definisci i valori di spaziatura per mantenere consistenza nel layout.</p>
        </div>

        <div class="spacing-scale">
          {#each spacingScale as space}
            <div class="spacing-item">
              <div class="spacing-label">
                <strong>{space.name}</strong>
                <span>{space.value}</span>
              </div>
              <div class="spacing-preview" style="width: {space.value}; height: 24px;"></div>
              <div class="spacing-description">{space.description}</div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Sezione Border Radius -->
    {#if activeTab === 'radius'}
      <div class="tab-section">
        <div class="section-header">
          <h2>Border Radius</h2>
          <p>Definisci i raggi degli angoli per elementi dell'interfaccia.</p>
        </div>

        <div class="radius-scale">
          {#each borderRadiuses as radius}
            <div class="radius-item">
              <div class="radius-label">
                <strong>{radius.name}</strong>
                <span>{radius.value}</span>
              </div>
              <div class="radius-preview" style="border-radius: {radius.value};"></div>
              <div class="radius-description">{radius.description}</div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Sezione Export -->
    {#if activeTab === 'export'}
      <div class="tab-section">
        <div class="section-header">
          <h2>Esporta Design System</h2>
          <p>Esporta il tuo design system in diversi formati per utilizzarlo nei tuoi progetti.</p>
        </div>

        <div class="export-options">
          <div class="form-group">
            <label for="exportFormat">Formato di esportazione</label>
            <select id="exportFormat" bind:value={exportFormat} class="form-control">
              <option value="css">CSS Variables</option>
              <option value="scss">SCSS Variables</option>
              <option value="json">JSON</option>
            </select>
          </div>

          <div class="export-preview">
            <h3>Anteprima</h3>
            <pre class="code-preview">
              {#if exportFormat === 'css'}
                {generateCSSVariables()}
              {:else if exportFormat === 'scss'}
                {generateSCSSVariables()}
              {:else if exportFormat === 'json'}
                {generateJSON()}
              {/if}
            </pre>
          </div>

          <div class="export-actions">
            <button on:click={exportDesignSystem} class="btn btn-primary">
              Esporta Design System
            </button>
            <button on:click={saveToLocalStorage} class="btn btn-secondary">
              Salva Localmente
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Dialog per la modifica della palette -->
  {#if editingPalette}
    <div class="modal-overlay">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3>Modifica Palette: {editingPalette.name}</h3>
          <button on:click={cancelEditingPalette} class="modal-close">×</button>
        </div>
        <div class="modal-content">
          <div class="form-group">
            <label for="editingPaletteBaseColor">Colore Base</label>
            <div class="color-input-container">
              <input 
                type="color" 
                id="editingPaletteBaseColor"
                bind:value={editingPalette.baseColor} 
                on:input={updateEditingPalette}
                class="color-picker"
              />
              <input 
                type="text" 
                bind:value={editingPalette.baseColor}
                on:input={updateEditingPalette}
                class="color-text"
              />
            </div>
          </div>
          
          <div class="color-shades-preview">
            {#each editingPalette.shades as shade}
              <div 
                class="color-swatch" 
                style="background-color: {shade.hex}"
              >
                <span class="shade-name">{shade.shade}</span>
                <span class="shade-hex">{shade.hex}</span>
              </div>
            {/each}
          </div>
        </div>
        <div class="modal-footer">
          <button on:click={cancelEditingPalette} class="btn btn-outline">Annulla</button>
          <button on:click={saveEditingPalette} class="btn btn-primary">Salva</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Toast Message -->
  {#if showToast}
    <div class="toast-message" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
      {toastMessage}
    </div>
  {/if}

  <div class="app-footer">
    <p>Design System Generator sviluppato da Rocco Scavone</p>
    <p>I dati vengono salvati localmente nel tuo browser</p>
  </div>
</section>

<style>
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    color: var(--text-color);
  }

  .app-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .app-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .app-description {
    color: var(--text-color-light);
    font-size: 1.1rem;
  }

  /* Tabs */
  .tabs-container {
    margin-bottom: 2rem;
  }

  .tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 1px;
  }

  .tab-button {
    padding: 0.75rem 1.25rem;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-color-light);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
  }

  .tab-button:hover {
    color: var(--text-color);
    background-color: var(--hover-bg);
  }

  .tab-button.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
  }

  .tab-icon {
    font-size: 1.2rem;
  }

  /* Contenuto della tab */
  .tab-content {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .tab-section {
    padding: 2rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

  .section-header p {
    color: var(--text-color-light);
    margin: 0;
  }

  /* Form per aggiungere palette */
  .add-palette-form {
    background-color: var(--hover-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .form-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-end;
  }

  .form-group {
    flex: 1;
    min-width: 200px;
  }

  .form-action {
    display: flex;
    align-items: flex-end;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--input-bg, var(--surface-color));
    color: var(--input-text, var(--text-color));
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .form-control:focus {
    outline: none;
    border-color: var(--input-focus-border, var(--primary-color));
    box-shadow: 0 0 0 3px var(--input-focus-shadow, rgba(var(--primary-rgb), 0.2));
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color-light);
    font-size: 0.9rem;
  }

  .color-input-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .color-picker {
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  .color-text {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--input-bg, var(--surface-color));
    color: var(--input-text, var(--text-color));
    font-size: 1rem;
  }

  /* Palette di colori */
  .palettes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
  }

  .palette-card {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .palette-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .palette-header h3 {
    margin: 0;
    font-size: 1.25rem;
  }

  .palette-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-icon {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .btn-icon:hover {
    background-color: var(--hover-bg);
  }

  .color-shades {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .color-swatch {
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    color: white;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }

  .color-swatch:hover {
    transform: scale(1.05);
    z-index: 1;
  }

  .shade-name {
    font-weight: 700;
    font-size: 1.2rem;
  }

  .shade-hex {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  /* Tipografia */
  .typography-scale {
    margin-bottom: 3rem;
    padding: 1.5rem;
    background-color: var(--hover-bg);
    border-radius: var(--border-radius);
  }

  .typography-scale h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .font-family {
    color: var(--text-color-light);
    margin-bottom: 1.5rem;
  }

  .font-family span {
    color: var(--text-color);
    font-weight: 500;
  }

  .typography-samples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .type-sample {
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .type-preview {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  .type-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
  }

  .type-detail {
    font-size: 0.9rem;
    color: var(--text-color-light);
  }

  .type-detail span {
    color: var(--text-color);
    font-weight: 500;
  }

  /* Spacing */
  .spacing-scale {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .spacing-item {
    background-color: var(--hover-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
  }

  .spacing-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .spacing-preview {
    background-color: var(--primary-color);
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .spacing-description {
    font-size: 0.9rem;
    color: var(--text-color-light);
  }

  /* Border Radius */
  .radius-scale {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .radius-item {
    background-color: var(--hover-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    text-align: center;
  }

  .radius-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .radius-preview {
    width: 100px;
    height: 100px;
    background-color: var(--primary-color);
    margin: 0 auto 1rem;
  }

  .radius-description {
    font-size: 0.9rem;
    color: var(--text-color-light);
  }

  /* Export */
  .export-options {
    max-width: 800px;
    margin: 0 auto;
  }

  .export-preview {
    margin: 2rem 0;
  }

  .code-preview {
    background-color: var(--hover-bg);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    overflow-x: auto;
    font-family: monospace;
    font-size: 0.9rem;
    white-space: pre-wrap;
    color: var(--text-color);
    max-height: 400px;
    overflow-y: auto;
  }

  .export-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-dialog {
    background-color: var(--card-bg, #ffffff);
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 600px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .modal-header h3 {
    margin: 0;
  }

  .modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .modal-close:hover {
    background-color: var(--hover-bg);
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-footer {
    padding: 1.5rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .color-shades-preview {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 1.5rem;
  }

  /* Toast */
  .toast-message {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--text-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }

  /* Footer */
  .app-footer {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-color-light);
    font-size: 0.9rem;
  }

  /* Buttons */
  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--primary-dark);
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: white;
  }

  .btn-secondary:hover {
    background-color: var(--secondary-dark);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
  }

  .btn-outline:hover {
    background-color: var(--hover-bg);
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    .form-row {
      flex-direction: column;
    }

    .form-action {
      width: 100%;
    }

    .palettes-container {
      grid-template-columns: 1fr;
    }

    .color-shades {
      grid-template-columns: repeat(5, 1fr);
    }

    .typography-samples,
    .spacing-scale,
    .radius-scale {
      grid-template-columns: 1fr;
    }

    .tabs {
      flex-wrap: nowrap;
      overflow-x: auto;
    }

    .export-actions {
      flex-direction: column;
    }
  }
</style>
