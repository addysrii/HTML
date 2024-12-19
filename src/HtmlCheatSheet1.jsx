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
      <div className="tabs tabs-boxed">
        <button 
          className={`tab ${activeTab === 'code' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          <Code className="mr-2 w-4 h-4" /> Code
        </button>
        <button 
          className={`tab ${activeTab === 'preview' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          <Eye className="mr-2 w-4 h-4" /> Preview
        </button>
        <button 
          className="tab ml-auto"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : <><Copy className="mr-2 w-4 h-4" /> Copy</>}
        </button>
      </div>

      <div className="p-4 bg-base-200">
        {activeTab === 'code' ? (
          <pre className="text-sm overflow-x-auto">
            <code className="text-base-content">{code}</code>
          </pre>
        ) : (
          <div className="bg-white p-4 rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: preview }} />
          </div>
        )}
      </div>
    </div>
  );
};

const HTMLCheatsheet = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [activeExamples, setActiveExamples] = useState({});

   const toggleExample = (section, index) => {
    const key = `${section}-${index}`;
    setActiveExamples(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = {
    basic: {
      title: 'Basic Structure',
      items: [
        {
          tag: 'html',
          description: 'The root element that wraps all content on an HTML page',
          syntax: '<html lang="en"> </html>',
          example: {
            code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`,
            preview: '<h1>Hello World!</h1>'
          }
        },
        {
          tag: 'head',
          description: 'Contains meta information about the HTML document',
          syntax: '<head> </head>',
          example: {
            code: `<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>`,
            preview: '<meta charset="UTF-8">'
          }
        }
      ]
    },
    text: {
  "title": "Text Formatting",
  "items": [
    {
      "tag": "h1-h6",
      "description": "Defines hierarchical headings, h1 being most important, h6 least",
      "syntax": "<h1> </h1> → <h6> </h6>",
      "example": {
        "code": "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Sub-subheading</h3>",
        "preview": "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Sub-subheading</h3>"
      }
    },
    {
      "tag": "p",
      "description": "Defines a paragraph of text",
      "syntax": "<p> </p>",
      "example": {
        "code": "<p>This is a paragraph of text.</p>",
        "preview": "<p>This is a paragraph of text.</p>"
      }
    },
    {
      "tag": "strong / b",
      "description": "Bold text (strong implies importance, b is purely visual)",
      "syntax": "<strong> </strong> or <b> </b>",
      "example": {
        "code": "This is <strong>very important</strong> text, and this is <b>bold</b>.",
        "preview": "This is <strong>very important</strong> text, and this is <b>bold</b>."
      }
    },
    {
      "tag": "em / i",
      "description": "Emphasized text (em implies emphasis, i is purely visual)",
      "syntax": "<em> </em> or <i> </i>",
      "example": {
        "code": "This text is <em>emphasized</em>, and this is <i>italicized</i>.",
        "preview": "This text is <em>emphasized</em>, and this is <i>italicized</i>."
      }
    },
    {
      "tag": "span",
      "description": "Inline container for styling text",
      "syntax": "<span> </span>",
      "example": {
        "code": "Here is <span style=\"color: red;\">red text</span>.",
        "preview": "Here is <span style=\"color: red;\">red text</span>."
      }
    },
    {
      "tag": "pre",
      "description": "Creates preformatted text that preserves spaces and line breaks",
      "syntax": "<pre> </pre>",
      "example": {
        "code": "<pre>This is\n  preformatted\n    text</pre>",
        "preview": "<pre>This is\n  preformatted\n    text</pre>"
      }
    },
    {
      "tag": "cite",
      "description": "Indicates a citation or reference to another source",
      "syntax": "<cite> </cite>",
      "example": {
        "code": "According to <cite>The Chicago Manual of Style</cite>, citations should be clear.",
        "preview": "According to <cite>The Chicago Manual of Style</cite>, citations should be clear."
      }
    },
    {
      "tag": "address",
      "description": "Defines contact information for the author or owner of a document",
      "syntax": "<address> </address>",
      "example": {
        "code": "<address>Email: contact@example.com<br>Phone: 123-456-7890</address>",
        "preview": "<address>Email: contact@example.com<br>Phone: 123-456-7890</address>"
      }
    }
  ]
},
links: {
      "title": "Links",
      "items": [
        {
          "tag": "a",
          "description": "Creates a hyperlink to a URL",
          "syntax": "<a href=\"URL\">clickable text</a>",
          "example": {
            "code": "<a href=\"https://www.example.com\">Visit Example</a>",
            "preview": "<a href=\"https://www.example.com\">Visit Example</a>"
          }
        },
        {
          "tag": "mailto",
          "description": "Creates a hyperlink to an email address",
          "syntax": "<a href=\"mailto:EMAIL_ADDRESS\">clickable text</a>",
          "example": {
            "code": "<a href=\"mailto:contact@example.com\">Email Us</a>",
            "preview": "<a href=\"mailto:contact@example.com\">Email Us</a>"
          }
        },
        {
          "tag": "name",
          "description": "Creates a target location within a document",
          "syntax": "<a name=\"NAME\"></a>",
          "example": {
            "code": "<a name=\"section1\"></a>",
            "preview": "Creates a named anchor in the document"
          }
        }
      ]
    },
    lists: {
      title: 'Lists',
      items: [
        {
          tag: 'ul',
          description: 'Creates an unordered (bulleted) list',
          syntax: '<ul> </ul>',
          example: {
            code: `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`,
            preview: `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`
          }
        },
        {
          tag: 'ol',
          description: 'Creates an ordered (numbered) list',
          syntax: '<ol> </ol>',
          example: {
            code: `<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`,
            preview: `<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`
          }
        },
        {
          tag: 'dl',
          description: 'Description list for key-value pairs',
          syntax: '<dl> </dl>',
          example: {
            code: `<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
            preview: `<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`
          }
        }
      ]
    },
    forms: {
      title: 'Forms & Input',
      items: [
        {
          tag: 'input text',
          description: 'Single-line text input field',
          syntax: '<input type="text">',
          example: {
             code: '<input type="text" placeholder="Enter your name" style="width: 100%; max-width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">',
            preview: '<input type="text" placeholder="Enter your name" class="input input-bordered w-full max-w-xs">'
          }
        },
        {
          tag: 'textarea',
          description: 'Multi-line text input area',
          syntax: '<textarea>',
          example: {
            code: '<textarea style="width: 100%; max-width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; min-height: 100px;" placeholder="Enter your message"></textarea>',
            preview: '<textarea class="textarea textarea-bordered" placeholder="Enter your message"></textarea>'
          }
        },
        {
          tag: 'select',
          description: 'Dropdown selection input',
          syntax: '<select> </select>',
          example: {
          code: `<select style="width: 100%; max-width: 300px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
  <option disabled selected>Pick a framework</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>`,
            preview: `<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Pick a framework</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>`
          }
        },
        {
          tag: 'checkbox / radio',
          description: 'Selection inputs for multiple or single choices',
          syntax: '<input type="checkbox"> or <input type="radio">',
          example: {
            code: `<div>
  <label>
    <input type="checkbox"> Option 1
  </label>
  <label>
    <input type="radio" name="options"> Option A
  </label>
  <label>
    <input type="radio" name="options"> Option B
  </label>
</div>`,
            preview: `<div>
  <label>
    <input type="checkbox"> Option 1
  </label>
  <label>
    <input type="radio" name="options"> Option A
  </label>
  <label>
    <input type="radio" name="options"> Option B
  </label>
</div>`
          }
        }
      ]
    },
    media: {
      title: 'Media & Links',
      items: [
        {
          tag: 'img',
          description: 'Embeds an image',
          syntax: '<img src="path/to/image.jpg" alt="Description">',
          example: {
           code: '<img src="/api/placeholder/400/300" alt="Sample Image" style="max-width: 300px; width: 100%; height: auto;">',
            preview: '<img src="/api/placeholder/400/300" alt="Sample Image" class="w-full max-w-xs">'
          }
        },
        {
          tag: 'a',
          description: 'Creates a hyperlink',
          syntax: '<a href="URL"> </a>',
          example: {
             code: '<a href="https://www.example.com" style="color: blue; text-decoration: underline;">Visit Example.com</a>',
            preview: '<a href="https://www.example.com" class="link link-primary">Visit Example.com</a>'
          }
        },
        {
          tag: 'video',
          description: 'Embeds a video player',
          syntax: '<video src="path/to/video.mp4"> </video>',
          example: {
            code: `<video controls style="max-width: 300px; width: 100%;">
  <source src="/api/placeholder/video" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
            preview: `<video controls class="w-full max-w-xs">
  <source src="/api/placeholder/video" type="video/mp4">
  Your browser does not support the video tag.
</video>`
          }
        }
      ]
    },
    semantic: {
      title: 'Semantic HTML',
      items: [
        {
          tag: 'header',
          description: 'Represents introductory content or navigation links',
          syntax: '<header> </header>',
          example: {
            code: `<header>
  <h1>Website Title</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>`,
            preview: `<header style="background-color: #f0f0f0; padding: 10px;">
  <h1>Website Title</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>`
          }
        },
        {
          tag: 'nav',
          description: 'Defines a set of navigation links',
          syntax: '<nav> </nav>',
          example: {
            code: `<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`,
            preview: `<nav style="background-color: #f0f0f0; padding: 10px;">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`
          }
        },
        {
          tag: 'article',
          description: 'Represents a self-contained composition',
          syntax: '<article> </article>',
          example: {
            code: `<article>
  <h2>Blog Post Title</h2>
  <p>This is the content of the blog post.</p>
  <footer>Published on: January 1, 2024</footer>
</article>`,
            preview: `<article style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <h2>Blog Post Title</h2>
  <p>This is the content of the blog post.</p>
  <footer>Published on: January 1, 2024</footer>
</article>`
          }
        }
        
      ],
      
    },
    advanced: {
      title: 'Advanced HTML',
      items: [
        {
          tag: 'template',
          description: 'Holds HTML that is not rendered immediately',
          syntax: '<template> </template>',
          example: {
            code: `<template id="user-card">
  <div class="card">
    <h2 class="name"></h2>
    <p class="email"></p>
  </div>
</template>
<div id="users"></div>
<script>
  const template = document.getElementById('user-card');
  const usersDiv = document.getElementById('users');
  
  const userdata = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  userdata.forEach(user => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = user.name;
    clone.querySelector('.email').textContent = user.email;
    usersDiv.appendChild(clone);
  });
</script>`,
            preview: `<div style="background-color: #f0f0f0; padding: 10px;">
  <div class="card">
    <h2>John Doe</h2>
    <p>john@example.com</p>
  </div>
  <div class="card">
    <h2>Jane Smith</h2>
    <p>jane@example.com</p>
  </div>
</div>`
          }
        },
        {
          tag: 'dialog',
          description: 'Creates a modal dialog box',
          syntax: '<dialog> </dialog>',
          example: {
            code: `<dialog id="welcomeModal">
  <h2>Welcome to Our Site!</h2>
  <p>This is a modal dialog.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>
<button onclick="document.getElementById('welcomeModal').showModal()">
  Open Modal
</button>`,
            preview: `<div style="background-color: #f0f0f0; padding: 10px;">
  <button>Open Modal</button>
</div>`
          }
        },
        {
          tag: 'data',
          description: 'Adds a machine-readable translation of content',
          syntax: '<data value="..."> </data>',
          example: {
            code: `<ul>
  <li>
    <data value="21053">Cherry Tomato</data>
    $1.99
  </li>
  <li>
    <data value="21054">Beef Tomato</data>
    $2.49
  </li>
</ul>`,
            preview: `<ul>
  <li>Cherry Tomato $1.99</li>
  <li>Beef Tomato $2.49</li>
</ul>`
          }
        }
      ]
    },
    accessibility: {
      title: 'Accessibility Tags',
      items: [
        {
          tag: 'aria-*',
          description: 'Accessibility attributes for enhanced screen reader support',
          syntax: '<element aria-label="..." aria-describedby="...">',
          example: {
            code: `<button aria-label="Close navigation menu">
  ✕
</button>
<div id="error-details" aria-live="polite">
  Error occurred while processing your request
</div>`,
            preview: `<div style="background-color: #f0f0f0; padding: 10px;">
  <button style="padding: 5px 10px;">✕</button>
  <div>Error occurred while processing your request</div>
</div>`
          }
        },
        {
          tag: 'label',
          description: 'Associates a label with form controls',
          syntax: '<label for="inputId"> </label>',
          example: {
            code: `<div>
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" 
         aria-describedby="email-help">
  <small id="email-help">
    We'll never share your email with anyone else.
  </small>
</div>`,
            preview: `<div>
  <label>Email Address:</label>
  <input type="email" placeholder="Enter email">
  <small>We'll never share your email with anyone else.</small>
</div>`
          }
        }
      ]
    }
  };
  
 return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <nav> 
            <img src="" alt="" />
        </nav>
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
           Beat HTML with our Cheatsheet
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg text-black">
            A comprehensive, interactive guide to HTML elements with live code previews and syntax examples
          </p>
        </header>

        <div className="bg-base-100 shadow-2xl rounded-2xl overflow-hidden">
          <div className="tabs tabs-lifted justify-center bg-base-200 p-2">
            {Object.keys(sections).map(section => (
              <button
                key={section}
                className={`tab tab-lg ${activeTab === section ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(section)}
              >
                {sections[section].title}
              </button>
            ))}
          </div>

          <div className="p-6 space-y-6">
            {sections[activeTab].items.map((item, index) => (
              <div 
                key={index} 
                className="card bg-base-200 hover:bg-base-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="card-body">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="badge badge-primary badge-lg p-3 font-bold">
                      {item.tag}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base-content">{item.description}</h3>
                    </div>
                    <button 
                      className="btn btn-sm btn-outline btn-primary"
                      onClick={() => toggleExample(activeTab, index)}
                    >
                      {activeExamples[`${activeTab}-${index}`] 
                        ? <><EyeOff className="mr-2 w-4 h-4" /> Hide Example</> 
                        : <><Eye className="mr-2 w-4 h-4" /> Show Example</>}
                    </button>
                  </div>

                  <div className="mt-4 mockup-code bg-neutral text-neutral-content">
                    <pre data-prefix="▶"><code>{item.syntax}</code></pre>
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

        <footer className="text-center mt-8 text-base-content/50 font-bold">
          <p>© 2024 HTML Cheatsheet · Crafted with ♥️ for developers by GDGoC</p>
        </footer>
      </div>
    </div>
  );
};

export default HTMLCheatsheet;