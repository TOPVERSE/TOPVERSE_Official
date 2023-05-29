const resource = {
  "nav": {
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["News"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "event": {
      "t": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Community"]);
      },
      "child": {
        "act": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["AaaO!"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["TOPO Land"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["VAMX"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Architecture as an Object"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Topverse Meta Island"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Academia for VR/AR/MR/XR Professionals"]);
          }
        ]
      }
    },
    "solutions": {
      "t": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Solutions"]);
      },
      "child": {
        "land": {
          "service": [
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Web 3.0"]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Digital Twins"]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mixed Reality"]);
            }
          ],
          "description": [
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["The quick brown fox jumps over the lazy dog."]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["IRL World in Digital"]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Immersive Creations"]);
            }
          ]
        }
      }
    },
    "portfolio": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["portfolio"]);
    },
    "learn": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["learn"]);
    },
    "check": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["check app"]);
    },
    "touch": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["get in touch"]);
    }
  },
  "scrolldown": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Scroll down to learn more"]);
  },
  "home": {
    "carousel": {
      "topic": [
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["TOKEN 2049 Singapore: Creator Party-verse"]);
        },
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["HoloWater\xAE\uFF1AWater Station Digital Twin"]);
        }
      ],
      "description": [
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["PARCEL Creatorverse Highlight Project"]);
        },
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Industrial Mixed Reality Built within Hololens 2"]);
        }
      ],
      "link": [
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Details"]);
        },
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Details"]);
        }
      ]
    },
    "sectionOne": {
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["World-Leading Web 3.0 Builders and AR/VR/MR Developers"]);
      },
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["80+"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["20+"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["2 Million+"]);
          }
        ],
        "subtext": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Metaverse Experts & Engineers"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Completed Builds & Inventions"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Square Meters Developed"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["We have been developing in metaverse since 2021"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Architects, Developers, Producers, amd more"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["in both virtual and IRL scales"]);
          }
        ]
      }
    },
    "sectionTwo": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Our Partners & Cooperations"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["With WHOM and WHICH Platform We've Been Built"]);
      }
    },
    "sectionThree": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["SHOWCASE"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Success Stories"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["See how TOPVERSE\xAE Brings the Virtual World into Reality"]);
      },
      "contentPrimary": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Metaverse Construction: The Party-verse"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["MR Digital Twin: HoloWater\xAE"]);
          }
        ]
      },
      "contentSecondary": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Never Drink Alone: The Bar Symphony"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["RIBA Metaverse Festival: The Chang'An Nostalgia"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["CASCI Digital Arts: The Core of Time"]);
          }
        ]
      },
      "contentThird": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bit.Country:2023 World Cup Wearables"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["MMMM Mic Dolls: Sound Interactive NFTs"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ultiverse Masterplan: The Circulus City"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["NASA HeroX: Mixed Reality Mars Mission"]);
          }
        ]
      },
      "link": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["More Stories"]);
      }
    },
    "sectionFour": {
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Connects with Power and Strength"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["TOPVERSE\xAE Lab Equips Pioneers with quick reactions, powerful teams, bold minds, unlimited inspirations and high-quality realisations"]);
      },
      "link": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" Check Out Our Solutions"]);
      }
    },
    "sectionFive": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Full-Stack Virtual and Reality Services"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["TO EXTEND THE REALITY INTO THE REALITY"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["More than just builders and engineers, we have you covered from digital content design and application development to project management, business measurements, branding, marketing and even more."]);
      },
      "content": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["110+ In-house Builders"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Create and Innovate since 2020"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Rapid Build Time"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Robust Ecosystems"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Open Community"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Data and Proprietary"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["We are the most advanced, artistic and fast-growing technical designer team in the world"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["We have been developing applications and creating digital contents before the metaverse was a thing"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["With parallel working and creative methods to bring ideas into reality faster than ever"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["We have partnered with more than 30 hardware brands and 50+ software/ generative engineer communities to meet both 2B/2C needs"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["We provide services and platforms for experienced professionals and scholars with idea exchange, research grants, technical teams and necessary resources"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["We build unique systems and data capabilities to accelerate business and marketing in the metaverse and industries"]);
          }
        ]
      }
    },
    "sectionSix": {
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["SOLUTIONS & SERVICES"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["See how the technology and creativity combine the reality with virtual world"]);
      },
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Industrial Mixed Reality"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Virtual Construction"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Web 3.0"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Large Model"]);
          }
        ],
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Digital Twin"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Generated Design"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Digital Economy"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["AIGC & Cloud Services"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enpower manufacture and mass production, covering all kinds of industries including construction, mining, sea port, water, and more."]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bridge virtuality with reality, bringing the digital world into the real life, cultivating broader practice of metaverse."]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Decentralized management and operation of digital contents/assets powered by the world-leading blockchain technology."]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["AI generated digital contents with self-trained model APIs to improve the virtual production and immersive experience."]);
          }
        ],
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["More Details"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["More Details"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["More Details"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["More Details"]);
          }
        ]
      }
    },
    "sectionSeven": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["VIRTUALIZATION IS NEVER A LIMIT"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Unlimited Possibilities to Engage & Interact"]);
      }
    },
    "sectionEight": {
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["E-Commerce"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Education"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Event"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Gaming"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Real-estate"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Cinematic"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sports"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Industry"]);
          }
        ],
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Promote and display products in the metaverse"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Train and educate individuals with skills and engaging digital contents"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Attract and gather people to host virtual conference, seminars and grand events"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Build blockchain-based gaming experience with reward bundles"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Develop virtual real-estate ecology for investors and collectors, or land rentials"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Host live, 3D interactable carnivals, festivals, performances in the virtual world"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Gamify top competitions through unlimited interactive add-ons, with more ways for audiences to participate"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Customise mixed reality experience for industrial manufacturing, productions, and safety"]);
          }
        ]
      }
    },
    "sectionNine": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["The Next Era of Reality"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["TO MAKE DIGITAL WORLD PLAYABLE IN PHYSICAL REALITY"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Get involved in this revolution and enjoy"]);
      }
    }
  },
  "foot": {
    "copyright": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["TOPVERSE LAB \xA9 Copyright 2019-2023 All rights reserved"]);
    },
    "release": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["London I Beijing I Shanghai I Hongkong"]);
    },
    "record": [
      (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6CAAICP\u59072023010651\u53F7-1"]);
      },
      (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([]);
      }
    ],
    "links": [
      {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["PRODUCT"]);
        },
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Home"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Solutions"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Press Release"]);
          }
        ]
      },
      {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["COMPANY"]);
        },
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["About Us"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Locations"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Terms of Use"]);
          }
        ]
      },
      {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["COMMUNITY"]);
        },
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["WeChat"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Twitter"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Red"]);
          }
        ]
      }
    ]
  },
  "wechat": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u5FAE\u4FE1\u516C\u4F17\u53F7:ttsetset"]);
  }
};

export { resource as default };
//# sourceMappingURL=en-UK-6f4e7eee.mjs.map
