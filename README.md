# Localized Responsive Google Play™ Badge (beta)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/XmlmXmlmX/localized-responsive-google-play-badge/blob/master/MIT-LICENSE)

A SVG of the current Google Play™ badge containing all languages.

NOTE: This project is just at the beginning. Many languages are not supported yet.

## Installation

using NPM

```
npm install localized-responsive-google-play-badge --save
```

using Bower

```
bower install localized-responsive-google-play-badge
```

## Usage

Use the SVG like this:

```
<img src="node_modules/localized-responsive-google-play-badge/dist/google-play-badge.svg" />
```

To get a specific language (not the system language) use the query string paramter `language`. Please note that it is not possible to use the language via query string paramter in `<img>`-Element `src`! This is not supported. You need to use the `<object>`-element. As fallback for browsers who doesn't support the `<object>`-Element, add a nested `<img>`-Element.

```
<object style="width:100%;" type="image/svg+xml" data="node_modules/localized-responsive-google-play-badge/dist/google-play-badge.svg?language=af">
    <img src="node_modules/localized-responsive-google-play-badge/dist/google-play-badge.svg">
</object>
```

## Preview

### Auto language (from browser settings):

![Google Play](https://rawgithub.com/XmlmXmlmX/localized-responsive-google-play-badge/master/dist/google-play-badge.svg "Localized Google Play Badge (depending on your System Language).")

### Language from query string paramter:

[Click here](http://xmlmxmlmx.github.io/localized-responsive-google-play-badge/all-badges.html)
(only CHrome, sorry :/)

## Supported languages

af, ar, am, az, be, bg, bn, ca, cs, da, de, el, en, es, es-419, et, eu, fa, fi, fil, fr, fr-ca, gl, gu, hi, hr, hu, hy, id, is, it, iw, ja, ka, kk, km, kn, ko, ky, lo, lt, lv, mk, ml, mn, mr, ms, my, ne, nl, no, pa, pl, pt, pt-br, ro, ru, si, sk, sl, sq, sr, sv, sw, ta, te, th, tr, ua, ur, uz, vi, zh-cn, zh-hk, zh-tw, zu

## Resources

All badgets are loaded from https://play.google.com/intl/en_us/badges/.

## Google Terms

Please note the Google Terms: https://www.google.com/intl/en/policies/terms/.
