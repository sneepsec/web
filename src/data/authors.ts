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
    bio: "Chủ tịch câu lạc bộ SEC. Yêu màu hồng ghét sự giả dối, ghét bị nói là thích chuối mặc dù thích thật.",
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
    bio: "Cá sấu là một loại bò sát mạnh bạo, ăn thịt động vật mà nó bắt được. Loài vật này có thể tấn công và bắt những con vật to lớn khoẻ mạnh như trâu bò và có khi là con người  khi vô tình rơi vào phạm vi hoạt động của nó. Do đó người ta xếp cá sấu vào loại động vật hung bạo nguy hiểm. Có một điểm đặc biệt là sau khi nuốt chửng con mồi, khoé mắt cá sấu lại chảy nước tương tự như con người chảy nước mắt khóc thương ai đó...Vì sự tương quan này người ta nghĩ là cá sấu đã khóc cho nạn nhân của nó, kẻ vừa bị nó cướp đi sinh mạng.",
  },
  {
    name: "Nguyễn Quang Anh",
    slug: "qa",
    image: "./src/assets/authors/quanganh.jpeg",
    bio: "Chưa có mô tả do admin quá bận :((",
  },
  {
    name: "Nguyễn Đức Giang",
    slug: "giang",
    image: "./src/assets/authors/giang.jpg",
    bio: "Chưa có mô tả do admin quá bận :((",
  },
  {
    name: "Nguyễn Tử Trọng Minh",
    slug: "giang",
    image: "./src/assets/authors/minh.jpg",
    bio: "Chưa có mô tả do admin quá bận :((",
  },
  {
    name: "Hưng Phạm",
    slug: "hung",
    image: "src/assets/authors/hung.jpg",
    bio: "Sự hưng phấn có thể được mô tả là một cảm giác hạnh phúc tăng cao hoặc cực kỳ tích cực. Đây được coi là đại diện cho mức độ hạnh phúc hoặc mãn nguyện tột độ bất thường, vượt quá mức độ xảy ra trong các phản ứng cảm xúc bình thường. Những người bị trầm cảm lưỡng cực (hưng trầm cảm) trong giai đoạn hưng cảm có thể gặp phải sự hưng phấn.",
  },
  {
    name: "Lập Sec",
    slug: "lap",
    image: "./src/assets/authors/lap.jpg",
    bio: "Đây là bot, được thiết kế để fix bug, rửa bát, nói mớ. Bạn nên cẩn thận vì đôi khi bot bị bug và tự nhận mình là người đẹp trai nhất clb.",
  },

];
