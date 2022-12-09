import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// const userData: Prisma.nguoi_dungCreateInput[] = [
//   {
//     email: 'alice@prisma.io',
//     mat_khau: 'alice123',
//     ho_ten: 'Alice n Wonderland',
//     tuoi: 16,
//     anh_dai_dien:
//       'https://celebrationspress.com/wp-content/uploads/2018/03/032618Alice.jpg',
//   },
//   {
//     email: 'bob@prisma.io',
//     mat_khau: 'bob123',
//     ho_ten: 'Bob',
//     tuoi: 17,
//     anh_dai_dien:
//       'https://upload.wikimedia.org/wikipedia/commons/7/7c/Alice-bob-mallory.jpg',
//   },
//   {
//     email: 'tom@gmail.com',
//     mat_khau: 'tom123',
//     ho_ten: 'Tom',
//     tuoi: 5,
//     anh_dai_dien:
//       'https://static.wikia.nocookie.net/tomandjerry/images/6/6b/Tom_%28Tom_and_Jerry_Chase%29.jpg',
//   },
//   {
//     email: 'jerry@gmail.com',
//     mat_khau: 'jerry123',
//     ho_ten: 'Jerry',
//     tuoi: 5,
//     anh_dai_dien:
//       'https://static.wikia.nocookie.net/tomandjerry/images/e/ec/Kisspng-jerry-mouse-tom-cat-nibbles-tom-and-jerry-5afa8781629bc3.8019112615263681294039.png',
//   },
//   {
//     email: 'oggy@prisma.io',
//     mat_khau: 'oggy123',
//     ho_ten: 'Oggy',
//     tuoi: 4,
//     anh_dai_dien:
//       'https://static.wikia.nocookie.net/oggyandthecockroaches/images/d/d9/OGGY_PERSO.png',
//   },
//   {
//     email: 'joey@gmail.com',
//     mat_khau: 'joey123',
//     ho_ten: 'Joey',
//     tuoi: 2,
//     anh_dai_dien:
//       'https://static.wikia.nocookie.net/oggyandthecockroaches/images/b/b6/JOEY_PERSO.png',
//   },
//   {
//     email: 'marky@prisma.io',
//     mat_khau: 'marky123',
//     ho_ten: 'Marky',
//     tuoi: 2,
//     anh_dai_dien:
//       'https://static.wikia.nocookie.net/oggyandthecockroaches/images/7/71/MARKY_PERSO.png',
//   },
//   {
//     email: 'deedee@gmail.com',
//     mat_khau: 'deedee123',
//     ho_ten: 'Dee Dee',
//     tuoi: 2,
//     anh_dai_dien:
//       'https://static.wikia.nocookie.net/oggyandthecockroaches/images/6/65/DEEDEE_PERSO.png',
//   },
// ];

const imagesData: Prisma.hinh_anhCreateInput[] = [
  {
    ten_hinh: 'Pizza Night',
    duong_dan:
      'https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2021-09/pizza_night_hero_0.jpg',
    mo_ta: 'Pizza for Dinner',
    nguoi_dung: { connect: { nguoi_dung_id: 3 } },
  },
  {
    ten_hinh: 'Warm Breakfast',
    duong_dan:
      'https://img.delicious.com.au/RwCMQREL/del/2017/04/all-day-pan-cooked-breakfast-44610-2.jpg',
    mo_ta: 'A breakfast with all Vegetable you need',
    nguoi_dung: { connect: { nguoi_dung_id: 6 } },
  },
  {
    ten_hinh: 'Beautiful Mountain Landscape',
    duong_dan:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
    mo_ta: 'Oh~ Such a Beautiful Scenary',
    nguoi_dung: { connect: { nguoi_dung_id: 8 } },
  },
  {
    ten_hinh: 'The Ocean in Blue Deep',
    duong_dan:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/deep-blue-ocean-hdere.jpg',
    mo_ta: 'What a deep blue scene',
    nguoi_dung: { connect: { nguoi_dung_id: 3 } },
  },
  {
    ten_hinh: 'Northern Light Aurora',
    duong_dan:
      'https://resources.arctickingdom.com/hubfs/Imported_Blog_Media/Igloo-BLL-Under-Aurora.jpg',
    mo_ta: "OMG~ It's beautiful",
    nguoi_dung: { connect: { nguoi_dung_id: 3 } },
  },
  {
    ten_hinh: 'The Opposite Traffic on Highway',
    duong_dan:
      'https://cdn.vox-cdn.com/thumbor/0ma2o-VojU7ZmJb1yTd3Mxg-l5g=/232x0:2999x2075/1200x800/filters:focal(232x0:2999x2075)/cdn.vox-cdn.com/uploads/chorus_image/image/44219366/72499026.0.0.jpg',
    mo_ta: 'I sight that will never be seen in Vietnam, for now',
    nguoi_dung: { connect: { nguoi_dung_id: 8 } },
  },
  {
    ten_hinh: 'Rest API Overview',
    duong_dan: 'https://vantien.net/wp-content/uploads/2021/02/Rest-API.png',
    mo_ta: 'Rest API. Easy right?',
    nguoi_dung: { connect: { nguoi_dung_id: 5 } },
  },
  {
    ten_hinh: 'Container Vessel',
    duong_dan:
      'https://techhistorian.com/content/images/2022/07/history-of-container-ships-techhistorian-01.webp',
    mo_ta: "It's huge, see it for yourself",
    nguoi_dung: { connect: { nguoi_dung_id: 9 } },
  },
  {
    ten_hinh: "Suffing! Let's go",
    duong_dan:
      'https://cdn1.i-scmp.com/sites/default/files/images/methode/2016/05/18/fd7d1b8e-1be1-11e6-9777-749fedcc73f5_image_hires.JPG',
    mo_ta: "On a summer vacation, let's go suffing",
    nguoi_dung: { connect: { nguoi_dung_id: 3 } },
  },
  {
    ten_hinh: 'Hot Air Balloon',
    duong_dan:
      'https://www.daysoftheyear.com/wp-content/uploads/hot-air-balloon-day2.jpg',
    mo_ta: "It's hot, isn't it",
    nguoi_dung: { connect: { nguoi_dung_id: 6 } },
  },
];

const main = async () => {
  console.log(`Start seeding ...`);
  // for (const u of userData) {
  //   const user = await prisma.nguoi_dung.create({
  //     data: u,
  //   });
  //   console.log(`Created user with id: ${user.nguoi_dung_id}`);
  // }
  for (const img of imagesData) {
    const image = await prisma.hinh_anh.create({
      data: img,
    });
    console.log(`Create image with id: ${image.hinh_id}`);
  }
  console.log(`Seeding finished.`);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
