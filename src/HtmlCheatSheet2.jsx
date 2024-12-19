
import React, { useState } from 'react';
import { Copy, Code, Eye, EyeOff } from 'lucide-react';

const ExamplePreview = ({ code, preview }) => {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 border rounded-lg overflow-hidden">
      <div className="flex border-b">
        <button 
          className={`px-4 py-2 flex items-center ${activeTab === 'code' ? 'bg-blue-50 border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          <Code className="mr-2 w-4 h-4" /> Code
        </button>
        <button 
          className={`px-4 py-2 flex items-center ${activeTab === 'preview' ? 'bg-blue-50 border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          <Eye className="mr-2 w-4 h-4" /> Preview
        </button>
        <button 
          className="px-4 py-2 flex items-center ml-auto"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : <><Copy className="mr-2 w-4 h-4" /> Copy</>}
        </button>
      </div>

      <div className="p-4 bg-gray-50">
        {activeTab === 'code' ? (
          <pre className="text-sm overflow-x-auto">
            <code>{code}</code>
          </pre>
        ) : (
          <div className="bg-white p-4 rounded">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};

const CSSCheatsheet = () => {
  const [activeTab, setActiveTab] = useState('layout');
  const [activeExamples, setActiveExamples] = useState({});

  const toggleExample = (section, index) => {
    const key = `${section}-${index}`;
    setActiveExamples(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cssProperties = {
  layout: {
    title: 'Layout & Box Model',
    items: [
      {
        property: 'display',
        description: 'Specifies how an element should be displayed',
        syntax: 'display: value;',
        values: ['block', 'inline', 'flex', 'grid', 'none'],
        example: {
          code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
          preview: 'Creates a flex container with centered content'
        }
      },
      {
        property: 'position',
        description: 'Specifies the positioning method of an element',
        syntax: 'position: value;',
        values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
        example: {
          code: `.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
          preview: 'Centers a modal in the viewport'
        }
      },
      {
        property: 'box-sizing',
        description: 'Defines how element dimensions are calculated',
        syntax: 'box-sizing: value;',
        values: ['content-box', 'border-box'],
        example: {
          code: `* {
  box-sizing: border-box;
}`,
          preview: 'Makes all elements include padding and border in their width/height'
        }
      }
    ]
  },
  spacing: {
    title: 'Spacing & Dimensions',
    items: [
      {
        property: 'margin',
        description: 'Sets the margin area on all four sides of an element',
        syntax: 'margin: value;',
        values: ['length', 'percentage', 'auto'],
        example: {
          code: `.element {
  margin: 10px 20px 10px 20px; /* top right bottom left */
  margin: 10px 20px; /* vertical horizontal */
  margin: 10px; /* all sides */
}`,
          preview: 'Sets various margin patterns'
        }
      },
      {
        property: 'padding',
        description: 'Sets the padding area on all four sides of an element',
        syntax: 'padding: value;',
        values: ['length', 'percentage'],
        example: {
          code: `.card {
  padding: 1rem 2rem;
}`,
          preview: 'Adds padding inside a card element'
        }
      }
    ]
  },
  typography: {
    title: 'Typography',
    items: [
      {
        property: 'font-family',
        description: 'Specifies the font for text',
        syntax: 'font-family: value;',
        values: ['family-name', 'generic-family'],
        example: {
          code: `.text {
  font-family: 'Arial', sans-serif;
}`,
          preview: 'Sets Arial as the primary font with sans-serif fallback'
        }
      },
      {
        property: 'font-size',
        description: 'Sets the size of the font',
        syntax: 'font-size: value;',
        values: ['length', 'percentage', 'keywords'],
        example: {
          code: `.heading {
  font-size: 2rem;
}`,
          preview: 'Sets font size relative to root element'
        }
      },
      {
        property: 'line-height',
        description: 'Sets the height of a line box',
        syntax: 'line-height: value;',
        values: ['normal', 'number', 'length', 'percentage'],
        example: {
          code: `.paragraph {
  line-height: 1.5;
}`,
          preview: 'Sets comfortable reading line height'
        }
      }
    ]
  },
  colors: {
    title: 'Colors & Backgrounds',
    items: [
      {
        property: 'color',
        description: 'Sets the color of text',
        syntax: 'color: value;',
        values: ['color-name', 'hex', 'rgb', 'hsl'],
        example: {
          code: `.text {
  color: #333333;
  color: rgb(51, 51, 51);
  color: hsl(0, 0%, 20%);
}`,
          preview: 'Sets text color using different formats'
        }
      },
      {
        property: 'background',
        description: 'Sets all background properties in one declaration',
        syntax: 'background: value;',
        values: ['color', 'image', 'position', 'size', 'repeat'],
        example: {
          code: `.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('image.jpg') center/cover no-repeat;
}`,
          preview: 'Creates a dark overlay on a background image'
        }
      }
    ]
  },
  flexbox: {
    title: 'Flexbox',
    items: [
      {
        property: 'flex',
        description: 'Shorthand for flex-grow, flex-shrink, and flex-basis',
        syntax: 'flex: value;',
        values: ['none', 'auto', '[grow] [shrink] [basis]'],
        example: {
          code: `.item {
  flex: 1 0 auto;
}`,
          preview: 'Creates a flexible item that can grow but not shrink'
        }
      },
      {
        property: 'justify-content',
        description: 'Aligns flex items along the main axis',
        syntax: 'justify-content: value;',
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
        example: {
          code: `.container {
  display: flex;
  justify-content: space-between;
}`,
          preview: 'Distributes items with equal space between them'
        }
      }
    ]
  },
  grid: {
    title: 'Grid',
    items: [
      {
        property: 'grid-template-columns',
        description: 'Defines columns in a grid layout',
        syntax: 'grid-template-columns: value;',
        values: ['none', 'length', 'percentage', 'fr', 'repeat()'],
        example: {
          code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
          preview: 'Creates a 3-column grid with equal widths'
        }
      },
      {
        property: 'grid-area',
        description: 'Specifies size and location of grid items',
        syntax: 'grid-area: value;',
        values: ['name', 'row-start / column-start / row-end / column-end'],
        example: {
          code: `.item {
  grid-area: 1 / 1 / 3 / 3;
}`,
          preview: 'Places item in a specific grid area'
        }
      }
    ]
  },
  animations: {
    title: 'Animations & Transitions',
    items: [
      {
        property: 'transition',
        description: 'Shorthand for transition properties',
        syntax: 'transition: property duration timing-function delay;',
        values: ['property-name', 'time', 'timing-function', 'delay'],
        example: {
          code: `.button {
  transition: all 0.3s ease-in-out;
}`,
          preview: 'Smooth transition for all changing properties'
        }
      },
      {
        property: 'animation',
        description: 'Shorthand for animation properties',
        syntax: 'animation: name duration timing-function delay iteration-count direction fill-mode play-state;',
        values: ['keyframe-name', 'time', 'timing-function', 'delay', 'iteration-count', 'direction', 'fill-mode', 'play-state'],
        example: {
          code: `@keyframes slide-in {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.element {
  animation: slide-in 0.5s ease-out forwards;
}`,
          preview: 'Slide-in animation from left'
        }
      }
    ]
  },
  transforms: {
    title: 'Transforms & Effects',
    items: [
      {
        property: 'transform',
        description: 'Applies 2D or 3D transformation to an element',
        syntax: 'transform: function;',
        values: ['none', 'matrix()', 'translate()', 'scale()', 'rotate()', 'skew()'],
        example: {
          code: `.card:hover {
  transform: scale(1.05) rotate(2deg);
}`,
          preview: 'Scales up and slightly rotates on hover'
        }
      },
      {
        property: 'box-shadow',
        description: 'Adds shadow effects around an element\'s frame',
        syntax: 'box-shadow: h-offset v-offset blur spread color;',
        values: ['none', 'length values', 'color'],
        example: {
          code: `.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`,
          preview: 'Adds subtle shadow to card element'
        }
      }
    ]
  }
};
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Master CSS with our Cheatsheet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive, interactive guide to CSS properties with live code previews and examples
          </p>
        </header>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-wrap gap-2 justify-center bg-gray-50 p-4">
            {Object.keys(cssProperties).map(section => (
              <button
                key={section}
                className={`px-4 py-2 rounded-lg font-medium transition-colors
                  ${activeTab === section 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white hover:bg-gray-100'}`}
                onClick={() => setActiveTab(section)}
              >
                {cssProperties[section].title}
              </button>
            ))}
          </div>

          <div className="p-6 space-y-6">
            {cssProperties[activeTab].items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-mono">
                      {item.property}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.description}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.values.map((value, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      className="px-4 py-2 flex items-center text-blue-600 hover:bg-blue-50 rounded-lg"
                      onClick={() => toggleExample(activeTab, index)}
                    >
                      {activeExamples[`${activeTab}-${index}`] 
                        ? <><EyeOff className="mr-2 w-4 h-4" /> Hide Example</> 
                        : <><Eye className="mr-2 w-4 h-4" /> Show Example</>}
                    </button>
                  </div>

                  <div className="mt-4 bg-gray-800 text-gray-200 rounded-lg p-4">
                    <pre><code>{item.syntax}</code></pre>
                  </div>

                  {activeExamples[`${activeTab}-${index}`] && (
                    <ExamplePreview 
                      code={item.example.code}
                      preview={item.example.preview}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-500 font-medium">
          <p>© 2024 CSS Cheatsheet · Built with ♥️ for developers</p>
        </footer>
      </div>
    </div>
  );
};

export default CSSCheatsheet;

