export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Nguyễn Kim Tuyền",
    slug: "tuyen",
    image: "./src/assets/authors/tuyen.jpeg",
    bio: "Chủ tịch câu lạc bộ SEC. Yêu màu hồng sự giả dối, ghét bị nói là thích chuối mặc dù thích thật.",
  },
  {
    name: "Ngô Quang Sáng",
    slug: "wangsang",
    image: "./src/assets/authors/wangsang.jpeg",
    bio: "Trưởng ban truyền thông câu lạc bộ SEC. Thích báo, yêu mèo, ngủ xuyên mùa đông và ước mơ trở thành nhà giáo dục học lỗi lạc",
  },
  {
    name: "Vũ Thị Hằng",
    slug: "lehang",
    image: "./src/assets/authors/hang.jpg",
    bio: "",
  },
  {
    name: "Nguyễn Quang Anh",
    slug: "qa",
    image: "./src/assets/authors/quanganh.jpeg",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
  {
    name: "Nguyễn Đức Giang",
    slug: "giang",
    image: "./src/assets/authors/giang.jpg",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
  {
    name: "Nguyễn Tử Trọng Minh",
    slug: "giang",
    image: "./src/assets/authors/minh.jpg",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
  {
    name: "Hưng Phạm",
    slug: "hung",
    image: "./src/assets/authors/hung.jpg",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
  {
    name: "Lập SEC",
    slug: "lap",
    image: "./src/assets/authors/lap.jpg",
    bio: "Đây là bot, không có mô tả",
  },

];
