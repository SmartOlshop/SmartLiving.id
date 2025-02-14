 // Variabel untuk menyimpan model dan harga yang dipilih
 let selectedModel = "warna pink";
 let selectedPrice = 200000;

 // Fungsi untuk mengganti gambar utama dan memperbarui data model
 function changeModel(modelName, imageSrc, price) {
   selectedModel = modelName;
   selectedPrice = price;
   document.getElementById("main-image").src = imageSrc;
   document.getElementById("product-title").textContent = "panci listrik kapasitas 1,2L - " + modelName;
   document.getElementById("product-price").textContent = "Rp" + price.toLocaleString();
 }

 // Fungsi untuk menambahkan produk ke keranjang (menggunakan Local Storage)
 function addToCart() {
   let cart = JSON.parse(localStorage.getItem("cart")) || [];
   cart.push({
     name: "Batik Pria - " + selectedModel,
     price: selectedPrice,
     image: document.getElementById("main-image").src
   });
   localStorage.setItem("cart", JSON.stringify(cart));
   alert(selectedModel + " telah ditambahkan ke keranjang!");
 }

 // Fungsi untuk proses beli sekarang: langsung pindah ke halaman checkout dengan data model yang dipilih
 function buyNow() {
   // Pastikan halaman checkout.html sudah tersedia
   window.location.href = "checkout.html?name=" + encodeURIComponent("Panci listrik kapasitas 1,2L - " + selectedModel) + "&price=" + selectedPrice;

 }

 // Fungsi untuk tombol back: kembali ke halaman sebelumnya
 function goBack() {
   window.location.href = 'index.html';
 }

 // Opsional: Jika ingin menangani event tombol back di perangkat mobile secara default, browser biasanya sudah menangani.