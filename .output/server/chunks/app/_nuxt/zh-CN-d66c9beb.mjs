const resource = {
  "nav": {
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6700\u65B0\u52A8\u6001"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9996\u9875"]);
    },
    "event": {
      "t": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u793E\u533A\u52A8\u6001"]);
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
            return _normalize(["\u672A\u5EFA\u6210\u5EFA\u7B51\u7CFB\u5217"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["TOPO\u5143\u754C\u5C9B"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["VR/AR/MR/XR\u5B66\u672F\u751F\u6001\u793E\u533A"]);
          }
        ]
      }
    },
    "solutions": {
      "t": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u89E3\u51B3\u65B9\u6848"]);
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
              return _normalize(["\u6570\u5B57\u5B6A\u751F"]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["\u6DF7\u5408\u73B0\u5B9E"]);
            }
          ],
          "description": [
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["\u533A\u5757\u94FE\u53CA\u5143\u5B87\u5B99\u7A7A\u95F4\u677F\u5757"]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["\u667A\u6167\u57CE\u5E02\u53CA\u5DE5\u4E1A\u5143\u5B87\u5B99\u89E3\u51B3\u65B9\u6848"]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["\u865A\u62DF\u3001\u6DF7\u5408\u73B0\u5B9E\u5185\u5BB9\u5F00\u53D1"]);
            }
          ]
        }
      }
    }
  },
  "scrolldown": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u4E0B\u6ED1\u67E5\u770B\u66F4\u591A"]);
  },
  "home": {
    "carousel": {
      "topic": [
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u521B\u4F5C\u8005\u805A\u4F1A\uFF1AParty-verse"]);
        },
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7EFF\u8272\u53CC\u78B3\u6C34\u52A1\u5DE5\u4F5C\u7AD9\u6DF7\u5408\u73B0\u5B9E\u6570\u5B57\u5B6A\u751F"]);
        }
      ],
      "description": [
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5728\u5168\u7403\u6700\u5927\u5143\u5B87\u5B99\u5E73\u53F0Decentraland\u76F8\u805A"]);
        },
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u57FA\u4E8E\u5FAE\u8F6FHoloLens 2\u7684\u5DE5\u4E1A\u5143\u5B87\u5B99"]);
        }
      ],
      "link": [
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u76F8\u5173\u6587\u7AE0"]);
        },
        (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u76F8\u5173\u6587\u7AE0"]);
        }
      ]
    },
    "sectionOne": {
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4E16\u754C\u9886\u5148Web 3.0\u9886\u57DF\u5E94\u7528\u53CA\u591A\u73B0\u5B9E\u6DF7\u5408\u5E94\u7528\u6280\u672F\u7814\u53D1"]);
      },
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["110+"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["20+"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["2\u767E\u4E07+"]);
          }
        ],
        "subtext": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5143\u5B87\u5B99\u53CA\u533A\u5757\u94FE\u5DE5\u7A0B\u5E08\u4E0E\u4EA4\u4E92\u4E13\u5BB6"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u843D\u5730\u9879\u76EE\u3001\u4E13\u5229\u8457\u4F5C\u53CA\u6807\u51C6\u5236\u8BA2"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5E73\u65B9\u7C73\u5B9E\u9645\u5F00\u53D1\u91CF"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u81EA2020\u5E74\u8D77\u53C2\u4E0E\u5143\u5B87\u5B99\u53CA\u533A\u5757\u94FE\u5EFA\u8BBE"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5EFA\u7B51\u5E08\u3001\u5F00\u53D1\u8005\u3001\u8BBE\u8BA1\u5E08\u3001\u5DE5\u7A0B\u5E08\u4EE5\u53CA\u66F4\u591A"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u73B0\u5B9E\u4E16\u754C\u53CA\u865A\u62DF\u4F7F\u7528\u573A\u666F\u76F8\u7ED3\u5408"]);
          }
        ]
      }
    },
    "sectionTwo": {
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5408\u4F5C\u4F19\u4F34"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u843D\u5730\u5E73\u53F0"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6210\u5458\u5355\u4F4D"]);
          }
        ]
      }
    },
    "sectionThree": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6848\u4F8B\u5C55\u793A"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6210\u529F\u843D\u5730\u6848\u4F8B"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["TOPVERSE\xAE \u52A9\u529B\u6253\u901A\u73B0\u5B9E\u4E16\u754C\u573A\u666F\u4E0E\u865A\u62DF\u4E16\u754C\u591A\u611F\u5B98\u6C89\u6D78\u5F0F\u4F53\u9A8C\uFF0C\u7528\u6280\u672F\u548C\u7F8E\u5B66\u4E3A\u5B9E\u4F53\u7ECF\u6D4E\u8D4B\u80FD"]);
      },
      "contentPrimary": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5143\u5B87\u5B99\u7A7A\u95F4\u8BBE\u8BA1\uFF1A\u521B\u4F5C\u8005\u805A\u4F1A\u7A7A\u95F4"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6DF7\u5408\u73B0\u5B9E\u6570\u5B57\u5B6A\u751F: HoloWater\xAE \u7EFF\u8272\u53CC\u78B3\u6C34\u52A1\u5DE5\u4F5C\u7AD9"]);
          }
        ]
      },
      "contentSecondary": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6C38\u4E0D\u72EC\u996E\uFF1A\u5143\u5B87\u5B99\u9152\u5427"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u82F1\u56FD\u7687\u5BB6\u5EFA\u7B51\u5E08\u5B66\u4F1A\u5143\u5B87\u5B99\u521B\u4F5C\u5927\u8D5B: \u7075\u5883\u4E1C\u65B9 \u56DE\u54CD\u957F\u5B89"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4E2D\u56FD\u822A\u5929\u6587\u521B\uFF1A\u56FD\u5BB6\u822A\u5929\u65E5\u7CFB\u5217\u6570\u5B57\u85CF\u54C1"]);
          }
        ]
      },
      "contentThird": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bit.Country\u6BD4\u7279\u5927\u9646\uFF1A2023\u4E16\u754C\u676F\u4E3B\u9898\u7CFB\u5217\u53EF\u7A7F\u6234\u6570\u5B57\u85CF\u54C1"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["MMMM\u58F0\u52A8\u8BA1\u5212: \u52A8\u6001\u58F0\u6CE2\u4EA4\u4E92\u5F0F\u6570\u5B57\u85CF\u54C1"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ultiverse\u7EC8\u70B9\u57CE\u603B\u4F53\u89C4\u5212: Circulus \u5143\u5B87\u5B99\u57CE\u5E02\u8BBE\u8BA1"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u7F8E\u56FD\u56FD\u5BB6\u822A\u7A7A\u822A\u5929\u5C40HeroX: \u6DF7\u5408\u73B0\u5B9E\u706B\u661F\u4EFB\u52A1"]);
          }
        ]
      },
      "link": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u66F4\u591A\u6848\u4F8B"]);
      }
    },
    "sectionFour": {
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5F3A\u6709\u529B\u7684\u4E13\u4E1A\u56E2\u961F\u652F\u6491"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["TOPVERSE\xAE Lab \u4E3A\u5143\u5B87\u5B99\u53CAWeb 3.0\u9886\u57DF\u5148\u9A71\u8005\u4EEC\u63D0\u4F9B\u5FEB\u901F\u7684\u53CD\u9988\u673A\u5236\u3001\u4E13\u4E1A\u7684\u56E2\u961F\u3001\u5927\u80C6\u4E30\u5BCC\u7684\u521B\u60F3\u529B\u3001\u65E0\u9650\u7684\u7075\u611F\u548C\u9AD8\u8D28\u91CF\u7684\u843D\u5730"]);
      },
      "link": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u67E5\u770B\u6211\u4EEC\u7684\u89E3\u51B3\u65B9\u6848"]);
      }
    },
    "sectionFive": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4E00\u7AD9\u5F0F\u591A\u73B0\u5B9E\u6280\u672F\u5F00\u53D1\u4E0E\u7A7A\u95F4\u8BBE\u8BA1\u670D\u52A1"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6269\u5C55\u548C\u4EA4\u878D\u865A\u62DF\u548C\u73B0\u5B9E\u7684\u8FB9\u754C"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4E0D\u4EC5\u4EC5\u662F\u5F00\u53D1\u8005\u548C\u8BBE\u8BA1\u5E08\uFF0C\u6211\u4EEC\u5C06\u4ECE\u6570\u5B57\u5185\u5BB9\u8D44\u4EA7\u5230\u5E94\u7528\u5F00\u53D1\u3001\u9879\u76EE\u7BA1\u7406\u3001\u5546\u4E1A\u8FD0\u8425\u3001\u5E02\u573A\u8425\u9500\u53CA\u54C1\u724C\u670D\u52A1\u7B49\u63D0\u4F9B\u5168\u94FE\u8DEF\u89E3\u51B3\u65B9\u6848"]);
      },
      "content": {
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["110+ \u4E13\u4E1A\u6280\u672F\u4EBA\u5458"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u62E5\u6709\u8D85\u8FC7\u5341\u5E74\u7684\u521B\u65B0\u4E0E\u7814\u53D1\u7ECF\u9A8C"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5FEB\u901F\u843D\u5730"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4E30\u5BCC\u7684\u751F\u6001\u5408\u4F5C\u4F19\u4F34"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5F00\u653E\u7684\u5B66\u672F\u4EA4\u6D41\u793E\u533A"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5B89\u5168\u53EF\u7528\u4E14\u591A\u6A21\u6001\u7684\u5927\u6570\u636E"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6211\u4EEC\u5C06\u63D0\u4F9B\u56FD\u9645\u6700\u4E3A\u524D\u6CBF\u7684\u4E13\u4E1A\u6280\u672F\u4E0E\u8BBE\u8BA1\u670D\u52A1\uFF0C\u62E5\u6709\u5FEB\u901F\u589E\u957F\u7684\u6280\u672F\u7F8E\u672F\u53CA\u4EA4\u4E92\u5F00\u53D1\u5DE5\u7A0B\u5E08"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5728\u5143\u5B87\u5B99\u6982\u5FF5\u76DB\u884C\u4E4B\u524D\u5C31\u5DF2\u7ECF\u5F00\u542F\u591A\u9879\u8DE8\u4E13\u4E1A\u3001\u591A\u5E73\u53F0\u7684\u6280\u672F\u81EA\u7814\uFF0C\u62E5\u6709\u591A\u9879\u4F5C\u54C1\u53CA\u8F6F\u4EF6\u4E13\u8457\u53CA\u53D1\u660E\u4E13\u5229"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u901A\u8FC7\u591A\u4EFB\u52A1\u5E76\u884C\u5DE5\u4F5C\u6D41\u53CA\u5145\u6EE1\u521B\u9020\u529B\u7684\u5DE5\u4F5C\u6A21\u5F0F\uFF0C\u5C06\u5B9A\u5236\u5316\u60F3\u6CD5\u8FDB\u884C\u524D\u6240\u672A\u6709\u7684\u5FEB\u901F\u843D\u5730"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6211\u4EEC\u4E0E\u8D85\u8FC730\u5BB6\u786C\u4EF6\u4F9B\u5E94\u5546\u53CA\u8D85\u8FC750\u5BB6Web 3.0\u3001\u533A\u5757\u94FE\u3001\u5143\u5B87\u5B99\u53CA\u4EBA\u5DE5\u667A\u80FD\u8F6F\u4EF6\u548C\u5546\u4E1A\u5316\u8FD0\u8425\u5546\u8FBE\u6210\u5408\u4F5C\u6765\u6EE1\u8DB3\u4E0D\u540C\u7684\u5E02\u573A\u9700\u6C42"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6211\u4EEC\u4E3A\u6709\u7ECF\u9A8C\u7684\u4E13\u4E1A\u4EBA\u58EB\u53CA\u591A\u56FD\u7C4D\u4E13\u5BB6\u548C\u5B66\u8005\u4EEC\u63D0\u4F9B\u4E86\u5F00\u653E\u5E73\u53F0\uFF0C\u7528\u4E8E\u5B66\u672F\u4EA4\u6D41\u3001\u6280\u672F\u8F6C\u5316\u3001\u7814\u7A76\u56E2\u961F\u642D\u5EFA\u53CA\u8D44\u6E90\u4EA4\u6362\u5BF9\u63A5"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6211\u4EEC\u6253\u9020\u4E86\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684\u6570\u636E\u7CFB\u7EDF\u7528\u4E8E\u5206\u6790\u3001\u50A8\u5B58\u53CA\u4FDD\u62A4\u5DE5\u4E1A\u53CA\u7528\u6237\u573A\u666F\u7684\u6570\u636E\u5B89\u5168\u53CA\u4E13\u4E1A\u7684\u884C\u4E1A\u6570\u636E\u5206\u6790"]);
          }
        ]
      }
    },
    "sectionSix": {
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u89E3\u51B3\u65B9\u6848\u53CA\u6280\u672F\u670D\u52A1"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5C06\u6280\u672F\u3001\u521B\u9020\u4E0E\u865A\u62DF\u4E16\u754C\u76F8\u7ED3\u5408\uFF0C\u5E76\u8D4B\u80FD\u5B9E\u4F53\u7269\u7406\u4E16\u754C"]);
      },
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5DE5\u4E1A\u7EA7\u6DF7\u5408\u73B0\u5B9E"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u865A\u62DF\u57CE\u5E02\u8BBE\u8BA1\u53CA\u7A7A\u95F4\u6253\u9020"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Web 3.0"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5927\u6A21\u578B\u8BAD\u7EC3"]);
          }
        ],
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6570\u5B57\u5B6A\u751F"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u53C2\u6570\u5316\u8BBE\u8BA1\u53CA\u7F16\u7A0B\u8BBE\u8BA1"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6570\u5B57\u7ECF\u6D4E\u751F\u6001"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["AIGC\u53CA\u4E91\u8BA1\u7B97\u670D\u52A1"]);
          }
        ],
        "description": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4E3A\u5DE5\u4E1A\u5236\u9020\u53CA\u57FA\u7840\u4EA7\u4E1A\u8D4B\u80FD\uFF0C\u6DB5\u76D6\u5EFA\u8BBE\u3001\u77FF\u4E1A\u3001\u6C34\u52A1\u3001\u6E2F\u53E3\u3001\u80FD\u6E90\u7B49\u591A\u4E2A\u5E94\u7528\u573A\u666F"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5C06\u865A\u62DF\u4E0E\u73B0\u5B9E\u878D\u5408\u8D2F\u901A\uFF0C\u5C06\u6570\u5B57\u4E16\u754C\u5E26\u5165\u7269\u7406\u4E16\u754C\uFF0C\u5B9E\u8DF5\u5143\u5B87\u5B99\u66F4\u4E3A\u5E7F\u9614\u7684\u4F7F\u7528\u573A\u666F"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u53BB\u4E2D\u5FC3\u5316\u7BA1\u7406\u53CA\u8FD0\u8425\u6570\u5B57\u8D44\u4EA7\uFF0C\u5E76\u7ED3\u5408\u533A\u5757\u94FE\u6280\u672F\u4E3A\u7528\u6237\u5E26\u6765\u66F4\u4E3A\u5B89\u5168\u3001\u4FBF\u6377\u7684\u4F7F\u7528\u4F53\u9A8C\u4E0E\u66F4\u4E3A\u4E30\u5BCC\u7684\u6570\u5B57\u6587\u5316\u521B\u610F\u5185\u5BB9"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4EBA\u5DE5\u667A\u80FD\u5927\u6A21\u578B\u8BAD\u7EC3\u4E09\u7EF4\u8D44\u4EA7\uFF0C\u4E3A\u6570\u5B57\u8D44\u4EA7\u53CA\u6C89\u6D78\u5F0F\u4F53\u9A8C\u63D0\u4F9B\u66F4\u52A0\u7CBE\u51C6\u8BAD\u7EC3\u7684\u6A21\u578B\u63A5\u53E3"]);
          }
        ],
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u67E5\u770B\u66F4\u591A"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u67E5\u770B\u66F4\u591A"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u67E5\u770B\u66F4\u591A"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u67E5\u770B\u66F4\u591A"]);
          }
        ]
      }
    },
    "sectionSeven": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6DF7\u5408\u73B0\u5B9E\u6253\u5F00\u5168\u65B0\u53EF\u80FD"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5168\u65B0\u7684\u4EA4\u4E92\u3001\u8868\u73B0\u4E0E\u53C2\u4E0E\u5F62\u5F0F"]);
      }
    },
    "sectionEight": {
      "content": {
        "title": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u7535\u5546\u5E73\u53F0"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6559\u80B2\u9886\u57DF"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4E8B\u4EF6\u6253\u9020"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6E38\u620F\u5F00\u53D1"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u623F\u5730\u4EA7"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6587\u5316\u6F14\u827A"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4F53\u80B2\u8FD0\u52A8"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5DE5\u4E1A\u5236\u9020"]);
          }
        ],
        "topic": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5728\u5143\u5B87\u5B99\u4E2D\u63D0\u5347\u54C1\u724C\u4E0E\u4EA7\u54C1\u7684\u66DD\u5149"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u901A\u8FC7\u6570\u5B57\u5185\u5BB9\u5728\u6C89\u6D78\u5F0F\u573A\u666F\u4E2D\u63D0\u5347\u7528\u6237\u7684\u80FD\u529B\u4E0E\u6280\u80FD"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5438\u5F15\u66F4\u591A\u7684\u7528\u6237\u4E3E\u529E\u6216\u53C2\u4E0E\u865A\u62DF\u7A7A\u95F4\u4E2D\u7684\u8BBA\u575B\u3001\u7814\u8BA8\u4F1A\u3001\u53D1\u5E03\u4F1A\u53CA\u66F4\u591A\u5927\u578B\u6D3B\u52A8"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5F00\u53D1\u57FA\u4E8EWeb 3.0\u3001\u533A\u5757\u94FE\u53CA\u591A\u73B0\u5B9E\u6DF7\u5408\u6280\u672F\u4E0B\u7684\u6C89\u6D78\u5F0F\u6E38\u620F\u4F53\u9A8C\uFF0C\u5E76\u4E3A\u7528\u6237\u53D1\u653E\u4E30\u539A\u5956\u52B1"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4E3A\u865A\u62DF\u5730\u4EA7\u5F00\u53D1\u5546\u3001\u4E1A\u4E3B\u53CA\u7528\u6237\u6253\u9020\u591A\u6E20\u9053\u3001\u591A\u5E73\u53F0\u7684\u4EF7\u503C\u751F\u6001\u53CA\u6570\u5B57\u7ECF\u6D4E\u5185\u5BB9\u8FD0\u8425"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6253\u9020\u4E09\u7EF4\u4EA4\u4E92\u7684\u8282\u65E5\u6D3B\u52A8\u3001\u6F14\u5531\u4F1A\u3001\u97F3\u4E50\u8282\u3001\u620F\u5267\u8282\u7B49\u591A\u573A\u666F\u878D\u5408\u7684\u591A\u611F\u5B98\u4F53\u9A8C"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u901A\u8FC7\u6E38\u620F\u5316\u3001\u865A\u62DF\u5316\u53CA\u5B9E\u65F6\u5316\u4F53\u80B2\u8FD0\u52A8\u8D5B\u4E8B\u53CA\u6D3B\u52A8\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u591A\u53C2\u4E0E\u6A21\u5F0F\u53CA\u89C2\u8D5B\u4F53\u9A8C\uFF0C\u4E30\u5BCC\u7ADE\u6280\u4F53\u80B2\u7ECF\u7EAA\u751F\u6001"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5B9A\u5236\u5316\u5DE5\u4E1A\u5236\u9020\u573A\u666F\u6DF7\u5408\u73B0\u5B9E\u9700\u6C42\uFF0C\u4EE5\u5DE5\u4E1A\u7EA7\u6253\u78E8\u8D28\u91CF\uFF0C\u63D0\u5347\u5DE5\u4E1A\u6548\u7387\u53CA\u5B89\u5168\u6027\u80FD\uFF0C\u4EE5\u865A\u8D4B\u5B9E\uFF0C\u4FDD\u9A7E\u62A4\u822A"]);
          }
        ]
      }
    },
    "sectionNine": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4E0B\u4E00\u4EE3\u591A\u73B0\u5B9E\u4EA4\u4E92\u5F62\u5F0F"]);
      },
      "topic": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8BA9\u6570\u5B57\u4E16\u754C\u5728\u7269\u7406\u4E16\u754C\u4E2D\u53EF\u73A9\u3001\u53EF\u611F\u3001\u53EF\u5851"]);
      },
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53C2\u4E0E\u5230\u8FD9\u573A\u5168\u65B0\u7684\u53D8\u9769\u4E2D\u5E76\u4EAB\u53D7\u4ED6\u5427"]);
      }
    }
  },
  "foot": {
    "copyright": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["TOPVERSE LAB \u5947\u70B9\u62D3\u754C \xA9 \u7248\u6743\u6240\u6709 2019-2023 All rights reserved"]);
    },
    "release": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4F26\u6566 I \u5317\u4EAC I \u4E0A\u6D77 I \u9999\u6E2F"]);
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
          return _normalize(["\u4EA7\u54C1"]);
        },
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u9996\u9875"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u89E3\u51B3\u65B9\u6848"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6700\u65B0\u52A8\u6001"]);
          }
        ]
      },
      {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u516C\u53F8"]);
        },
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5173\u4E8E\u6211\u4EEC"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4F4D\u7F6E\u4FE1\u606F"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4F7F\u7528\u6761\u6B3E"]);
          }
        ]
      },
      {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u793E\u533A"]);
        },
        "link": [
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5FAE\u4FE1\u516C\u4F17\u53F7"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Twitter"]);
          },
          (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5C0F\u7EA2\u4E66"]);
          }
        ]
      }
    ]
  },
  "wechat": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u5FAE\u4FE1\u516C\u4F17\u53F7"]);
  }
};

export { resource as default };
//# sourceMappingURL=zh-CN-d66c9beb.mjs.map
