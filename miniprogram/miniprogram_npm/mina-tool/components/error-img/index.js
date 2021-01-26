const err_base64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFN0lEQVRoQ+1ZXWgcVRQ+584GNNiigWD7oGjxwbRUQQXbGHfnzCaVJA/WPERRQQVbtZUK6psPtg++qWCxVRPBCio2D7E+JEXTnTsbY61gBZVqH0IVfbASSEVlFbIzR06dlM1mZvbe3USIeGEIbL7z3fPN/Tn3foOwxhuu8fzhfwEygmNjY05HR4enlNqJiLcAwJU1j0B+XXyY+csoio7Nz8/7w8PDYaszoKUR8H1/ABGHAWAAADotk5kDgElmHvM8b9Iy9hK8KQFa6x4AeBIA7m2247q4owDwKhHN2PJZCZienu6MougFZt5l25EJHhFHlVLP5fN5GR2jZixAa+0CwCgA3GDE3DxoFgB2EVFgQmEkIAiCPcx8yIRwpTCIuNd13cON+BoKCILgHmYeb0RU+39m/hgATiPiV/I7M98MALci4g4bHkQccl33g6yYTAHlcrkriqJvbTqNouhAsVjcnxRTKpX2K6Wet+FTSm0uFArfpcWkCpicnFzf3t5+nJm7TTtUSl1bKBR+ysKXy+Vroij60ZQTEU9WKpX+gYGB35JiUgUEQTBis9sg4kHXdZ8ySSwIgleYeZ8JVjCyO7muu9tYQLzPf2LageCiKLqjWCyeNIkplUrdSqlPTbA1mDuT6kTiCGit37csUn8Q0TqbhLTWvwPAFRYxR4novnr8MgHx8WDCgligARGRTYzWWgOA1BbjxsyD9ceOZQK01u8AwAPGrP8ALxBRh02M1noeAK6yiQGAd4nowdqYJQK01jlm/gURrZIRwmq1elNfX983JglNTU1tzeVyX5tgazHMPI+IVxNRdfH3JQJ8378bEY/ZEsf414noCZNYrfVrAPC4CbYew8w7Pc/7ME3ACCI2fVBzHGdLPp/PLHzT09ObwzA800zyEsPMo57nXdpS66fQZwCwrVnyuINtnud9nsTh+/7tiHiqFX4AOEVE2xNHQGstJfvGFjuQmnDAcZwzzCwvRArR9jAMt9geI1LyOEtEXWkCfgaADa0KWOX480S0MU3AnwBw2Son0Cr9X0R0+X9WwJqfQq0s4hIifqSUkgPdBXnCMJS/4DiOVNyLTxRF3cx8FwAUm5xLmYvYdhudQUQ5dk8R0XmbhLTWGxCxj5llTxeXw7Slb6O+7x9CxD0mTIj4suu6z5hgG2GCIHiJmZ9uhIvrzGHP8/YmLuITJ070OY4j99msNouI+1zXPW7SoSkmCIJ+Zj7YyPUIw3BHb2/vVKIAsQg7OztlIae6bMz8mOd5I6aJ2eB839+NiG9kxMzNzc1trLUkk47TRwDgoRSS00R0m01Stlit9RfiYKTEvU1ED9f+z/ZCI/cWI8PJNvFFfGygyWVnWTO60EhUgytlFxGdbTbBrDittZzD0iwUsytlLEC2tdRLfVtb2/qenh65065Ym5mZWbewsJBoncSdmF/qJcDAVrmeiH5YCQVa6+sA4Ps0LmtbRYjEiQ7DUKpqlpn7CBHJom+6aa1lUb6VQTDrOE53mmOdaS1mLaiaDo8g4phtXYj3ffk4smRXSRCSuXGYmLumzrQUuPEoisZzudy5+jcmI1qtVjcppYaYeahRwRIhJg51QwHxerB2qAFAFvm5+I1uAgAr48vEmb4o0nTyilPNzG/amL2m3LU4MXMR8dEsR3oJ3qaT2LF+0cb0teGX3aZSqTyb5kQncRmPQG3wmv3IV/8GYh/1fmbut3XzYpdNvj+8969/Zq0XEluSgwAwiIhbG3zoFvtxAhEnai1Cm6nW9BpotpPVjGtqDaxmQrbca17A3+QmI09j67ERAAAAAElFTkSuQmCC';

Component({
  properties: {
    err: {
      type: String,
      value: err_base64,
    },
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: '',
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false,
    },
  },
  options: {
    addGlobalClass: true,
  },
  data: {
    _src: '',
  },
  lifetimes: {},
  observers: {
    src(src) {
      if (src) {
        this.setData({
          _src: src,
        });
      }
    },
  },
  methods: {
    onError() {
      this.setData({
        _src: this.data.errUrl,
      });
    },
  },
});
