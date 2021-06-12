<template>
  <div class="w-full lg:w-[80%] mt-20">
    <h1 class="font-bold">ULASAN (10)</h1>
    <p>Title judul produk tertulis disini sesuai dengan titlenya </p>
    <div class="w-full">
      <h3 class="my-8 font-bold">Semua Ulasan (10)</h3>

      <!-- list ulasan -->
      <div class="w-full">
        <div v-for="(ulasan, index) of ulasanList" :key="index" class="border border-gray-300 rounded-md flex flex-col items-start lg:flex-row p-5 w-full mb-3">
          <div class="lg:sticky top-0 pt-5 flex flex-row lg:flex-col items-center lg:w-[15%]">
            <div class="rounded-full w-16 lg:w-20 h-16 lg:h-20 bg-gray-500 mr-3 lg:mr-0">
              <img src="" alt="">
            </div>
            <div>
              <h3 class="text-base lg:text-lg font-bold">{{ ulasan.namaPembeli }}</h3>
              <p class="text-sm">{{ ulasan.waktuBerlalu }}</p>
            </div>
          </div>
          <div class="py-5 lg:pl-8 lg:w-[85%]">
            <Rating :score="ulasan.rating" :maxScore="5"/>
            <p class="mb-5">
              {{ ulasan.ulasan }}
            </p>
            <div class="bg-shopperly-green-100 rounded-md flex flex-col lg:flex-row p-4 w-full">
              <div class="flex flow-row lg:flex-col items-center lg:w-[15%] mb-2 lg:mb-0">
                <div class="rounded-full w-12 lg:w-14 h-12 lg:h-14 bg-gray-500 mr-3 lg:mr-0">
                  <img src="" alt="">
                </div>
                <div>
                  <h3 class="text-sm font-bold">{{ ulasan.tanggapanToko.namaToko }}</h3>
                  <p class="text-xs">{{ ulasan.tanggapanToko.waktuBerlalu }}</p>
                </div>
              </div>
              <p class="w-[85%] pl-3 text-sm">
               {{  ulasan.tanggapanToko.tanggapan }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Rating from "@/components/Rating.vue";

export default {
  components: {
    Rating
  },
  setup(){
    const ulasanList = reactive([
      {
        namaPembeli: 'Nama Pembeli',
        waktuBerlalu: 'seminggu yang lalu',
        rating: 4,
        ulasan: 'Barang nya keren banget dan saya sangat suka dengan kualitas barang dari Toko ini!',
        tanggapanToko: {
          namaToko: 'Nama Toko',
          waktuBerlalu: '1 jam yang lalu',
          tanggapan: 'Terima kasih sudah memberikan ulasan yang bagus untuk toko ini, dukung terus kami agar selalu menjadi toko yang paling bagus di shopperly!hapy shopping happy shopperly! dan berikan pb-2 untuk jarak antar ulasan pembeli dan ulasan penjual.'
        }
      },
      {
        namaPembeli: 'Nama Pembeli',
        waktuBerlalu: 'seminggu yang lalu',
        rating: 5,
        ulasan: 'Barang nya keren banget dan saya sangat suka dengan kualitas barang dari Toko ini!!',
        tanggapanToko: {
          namaToko: 'Nama Toko',
          waktuBerlalu: '2 jam yang lalu',
          tanggapan: 'Terima kasih sudah memberikan ulasan yang bagus untuk toko ini, dukung terus kami agar selalu menjadi toko yang paling bagus di shopperly!hapy shopping happy shopperly! dan tunggu selalu produk produk dari toko kesayangan kalian dan jangan lupa untuk selalu memberikan rating tinggi  kepada kami karena rating mu membantu penjualan kita selalu dan terima  kasih terlah berbelanja di toko ini ! thank you so much dan selalu selalu belanja disini yaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa intinya jika panjang maka background nya ikut turun sampai kebawah terus menerus kebawah dan selalu dan terus turun dan berikan padding py-2.5'
        }
      },
      {
        namaPembeli: 'Nama Pembeli',
        waktuBerlalu: 'seminggu yang lalu',
        rating: 2,
        ulasan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quo officia quasi cum mollitia excepturi vitae voluptate at ex laudantium sapiente fugiat iusto dolorem est eveniet. Consequuntur, inventore quisquam amet vitae cupiditate recusandae ipsa fugiat. Voluptatibus, esse explicabo dolorem, officia nulla, modi repudiandae corporis sed sit dignissimos facilis inventore nemo quibusdam aliquam reprehenderit beatae eius laborum? Quia veniam quod, ipsum nulla sed non delectus aut voluptatem eaque natus, impedit vel et? Accusamus tempore vel pariatur doloribus laudantium. Architecto, soluta quo odio error sint consequatur quod tempore, hic asperiores, eius numquam optio voluptatibus. Asperiores illo fugit quas perspiciatis aspernatur odit dolores eligendi cupiditate laborum, quo facere incidunt numquam dicta itaque earum eos laboriosam perferendis quae qui temporibus tempora cumque minima! Blanditiis laborum esse iusto, nostrum quidem quod, totam illum alias eos quos reiciendis vel aut error sint provident necessitatibus, voluptatum nisi qui repellat quibusdam. Odio deleniti consequatur nobis, neque optio natus. Deserunt, odio sint consequatur nihil voluptas, molestiae ab enim repellendus omnis voluptatibus nam fugit iure fugiat. Placeat officiis praesentium modi nam ducimus at quod cupiditate perspiciatis! Facilis eum exercitationem esse eius quidem doloribus voluptate nemo animi blanditiis dolor doloremque consequuntur, delectus nostrum nobis odit voluptatem consectetur itaque est autem reiciendis!',
        tanggapanToko: {
          namaToko: 'Nama Toko',
          waktuBerlalu: '2 jam yang lalu',
          tanggapan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quo officia quasi cum mollitia excepturi vitae voluptate at ex laudantium sapiente fugiat iusto dolorem est eveniet. Consequuntur, inventore quisquam amet vitae cupiditate recusandae ipsa fugiat. Voluptatibus, esse explicabo dolorem, officia nulla, modi repudiandae corporis sed sit dignissimos facilis inventore nemo quibusdam aliquam reprehenderit beatae eius laborum? Quia veniam quod, ipsum nulla sed non delectus aut voluptatem eaque natus, impedit vel et? Accusamus tempore vel pariatur doloribus laudantium. Architecto, soluta quo odio error sint consequatur quod tempore, hic asperiores, eius numquam optio voluptatibus. Asperiores illo fugit quas perspiciatis aspernatur odit dolores eligendi cupiditate laborum, quo facere incidunt numquam dicta itaque earum eos laboriosam perferendis quae qui temporibus tempora cumque minima! Blanditiis laborum esse iusto, nostrum quidem quod, totam illum alias eos quos reiciendis vel aut error sint provident necessitatibus, voluptatum nisi qui repellat quibusdam. Odio deleniti consequatur nobis, neque optio natus. Deserunt, odio sint consequatur nihil voluptas, molestiae ab enim repellendus omnis voluptatibus nam fugit iure fugiat. Placeat officiis praesentium modi nam ducimus at quod cupiditate perspiciatis! Facilis eum exercitationem esse eius quidem doloribus voluptate nemo animi blanditiis dolor doloremque consequuntur, delectus nostrum nobis odit voluptatem consectetur itaque est autem reiciendis!'
        }
      },
    ])

    return {
      ulasanList
    }
  }
}
</script>