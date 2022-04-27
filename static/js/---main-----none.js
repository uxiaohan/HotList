/*
 * @Author: Han
 * @Date: 2022-03-18 11:44:52
 * @LastEditors: Han
 * @LastEditTime: 2022-04-27 16:03:14
 * @FilePath: \GithubProject\HotList\static\js\---main-----none.js
 */
var app = new Vue({
  el: '#main',
  data() {
    return {
      clientKey: 'url',
      JSONDATAS: {
        allJson: {
          data: []
        },
        huPu: {
          data: []
        },
        '36Ke': {
          data: []
        },
        zhihuHot: {
          data: []
        },
        baiduRD: {
          data: []
        },
        bili: {
          data: []
        },
        history: {
          data: []
        },
        baiduRY: {
          data: []
        },
        wbHot: {
          data: []
        },
        douyinHot: {
          data: []
        },
        douban: {
          data: []
        },
        ssPai: {
          data: []
        },
        itInfo: {
          data: []
        },
        itNews: {
          data: []
        },
        wxHot: {
          data: []
        },
        wxJoke: {
          data: []
        },
        wxFood: {
          data: []
        },
        wxKeJi: {
          data: []
        },
        wxLvYou: {
          data: []
        },
        wxMoney: {
          data: []
        },
        wxXingZuo: {
          data: []
        },
        wxBaGua: {
          data: []
        }
      }
    }
  },
  created() {
    console.group("%c \u4F5C\u8005\u4FE1\u606F", "color: #fadfa3;background: #030307;padding:5px");
    console.log("%c \u4e00\u652f\u7a7f\u4e91\u7bad\uff0c\u5343\u519b\u4e07\u9a6c\u6765\u76f8\u89c1\uff01 My Name's \u97E9\u5C0F\u97E9 QQ\uff1a1655466387", "color: #fadfa3;background: #030307;padding:5px");
    console.log("%c \u97E9\u5C0F\u97E9\u535A\u5BA2 Www.Vvhan.Com", "color: #fadfa3;background: #030307;padding:5px");
    console.log("%c \u97E9\u5C0F\u97E9API\u63A5\u53E3 Api.Vvhan.Com", "color: #fadfa3;background: #030307;padding:5px");
    console.log("%c \u6B22\u8FCE\u524D\u6765\u56F4\u89C2\u3001\u5410\u69FD\u3001\u70B9\u8D5E\u3001\u5B66\u4E60......", "color: #fadfa3;background: #030307;padding:5px");
    console.groupEnd();
    console.group("%c \u4E00\u8A00", "color: #ffffff;background: #6666FF;padding:5px");
    console.log("%c \u96BE\u5FD8\u548C\u96BE\u8FC7\u603B\u90FD\u662F\u4F1A\u6709\u7684\u5427", "color: #ffffff;background: #6666FF;padding:5px");
    console.log("%c \u90A3\u4E9B\u4EBA\u548C\u4E8B\u60C5\u603B\u90FD\u662F\u4F1A\u6709\u7684\u5427", "color: #ffffff;background: #6666FF;padding:5px");
    console.log("%c \u660E\u4EAE\u4E0E\u6666\u6697\u603B\u90FD\u662F\u4F1A\u6709\u7684\u5427", "color: #ffffff;background: #6666FF;padding:5px");
    console.groupEnd();
    this.clientKey = /Android|iPhone|SymbianOS|Windows Phone|iPad|webOS|BlackBerry|iPod/i.test(navigator.userAgent) ? 'mobilUrl' : 'url';
    this.getDatas()
  },
  methods: {
    async getDatas(key = 'allJson') {
      const keyArr = ['huPu', '36Ke', 'zhihuHot', 'baiduRD', 'bili', 'history', 'baiduRY', 'wbHot', 'douyinHot', 'douban', 'ssPai', 'itInfo', 'itNews', 'wxHot', 'wxJoke', 'wxFood', 'wxBaGua', 'wxKeJi', 'wxMoney', 'wxXingZuo', 'wxLvYou'];
      key == 'allJson' && keyArr.forEach(itm => {
        this.JSONDATAS[itm].ref = true
      })
      if (this.JSONDATAS[key].ref == true) return;
      this.JSONDATAS[key].ref = true
      const {
        data
      } = await axios.get('https://api.vvhan.com/api/hotlist', {
        params: {
          type: key
        }
      })
      if (data.success == true) {
        const {
          data: _res
        } = data
        if (key == 'allJson') {
          keyArr.forEach(itm => {
            _res[itm]['ref'] = false
            this.JSONDATAS[itm] = _res[itm]
          })
        } else {
          data.ref = false
          this.JSONDATAS[key] = data
        }
      }
    }
  },
})