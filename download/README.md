# Accademia Italiana Offline HTML

Bu klasordeki onerilen dosya `accademia-italiana-offline.html` dosyasidir.

Kullanma:

1. `accademia-italiana-offline.html` dosyasini indir.
2. Dosyaya cift tikla veya tarayiciya surukle.
3. Internet ya da sunucu gerekmeden acilmalidir.

Alternatif olarak `accademia-italiana-offline-html.zip` dosyasini indirip icindeki HTML dosyasini acabilirsin.

Bu dosya React, Vite, harici JavaScript, assets klasoru veya internet baglantisi gerektirmez. Foto, stil ve icerik tek HTML dosyasinin icine gomuludur.

Not: Paket statik onizleme icindir. Form gonderimi veya canli sunucu ozellikleri gerektiren islemler icin GitHub reposundaki React projesi kullanilmalidir.

## WordPress theme packages

WordPress onizlemesi icin guncel paketler:

- `accademia-ascoli-preview.zip`: mevcut kurulu temayi silmeden ayri bir onizleme temasi olarak yuklemek icin onerilen paket.
- `accademia-italiana-ascoli-theme.zip`: ana Accademia Italiana Ascoli tema paketi.
- `accademia-italiana-ascoli-theme-1.zip`: WordPress daha once `-1` klasoru olusturduysa ayni kurulum adiyla denemek icin paket.

Bu paketler Vite `manifest.json` dosyasini kullanir. `functions.php`, ana CSS ve JS dosyalarini manifestten bulur; WordPress 6.5 ve uzerinde JS'i `wp_enqueue_script_module` ile, daha eski surumlerde `wp_enqueue_script` ve `type="module"` fallback'i ile yukler.
