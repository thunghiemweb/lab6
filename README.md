 # Lab 05
Nội dung bài tập thực hành:

Hãy làm các bài lab theo link dưới đây và đảm bảo rằng bạn sẽ không xoá repositories cho đến khi kết thúc môn học. Lưu kết quả bài Lab trên Githup.
Đặt tên bài lab ở Github theo quy định sau: LAB+number_subnumber. Ví dụ: LAB01_1
Lỗi thường gặp: Khi dùng functional component, lưu ý việc sử dụng hay không dấu {} ở props, ví dụ: function RenderCard({ item }) thay vì function RenderCard(item) 
Học viên vào link Video trên Coursera để xem chi tiết yêu cầu của bài lab, bản dịch đính kèm chỉ hỗ trợ dịch text.

1.
Lab (Video): Header and Footer https://www.coursera.org/learn/front-end-react/lecture/7abwF/exercise-video-header-and-footer
Lab (Instructions): Header and Footer https://www.coursera.org/learn/front-end-react/supplement/dLbRz/exercise-instructions-header-and-footer
Lưu ý: nếu gặp lỗi khi cài đặt font-awesome với yarn thì hãy sửa theo gợi ý ở đây: https://stackoverflow.com/a/16460213 (chạy command: Set-ExecutionPolicy Unrestricted ở Powershell với quyền admin).

2.
Lab (Video): React Router https://www.coursera.org/learn/front-end-react/lecture/meLZh/exercise-video-react-router
Lab (Instructions): React Router https://www.coursera.org/learn/front-end-react/supplement/X2eeR/exercise-instructions-react-router

3.
Lab (Video): Single Page Applications Part 1 https://www.coursera.org/learn/front-end-react/lecture/vdABh/exercise-video-single-page-applications-part-1
Lab (Instructions): Single Page Applications Part 1 https://www.coursera.org/learn/front-end-react/supplement/CmStz/exercise-instructions-single-page-applications-part-1

4.
Lab (Video): Single Page Applications Part 2 https://www.coursera.org/learn/front-end-react/lecture/Mvhcl/exercise-video-single-page-applications-part-2
Lab (Instructions): Single Page Applications Part 2  https://www.coursera.org/learn/front-end-react/supplement/39mcF/exercise-instructions-single-page-applications-part-2
Lưu ý: trong file DishDetailComponent.js, nếu bạn khai báo DishDetail component là class thì những chỗ trong hướng dẫn đang sử dụng là props.abc thì cần sửa lại thành this.props.abc
Thời lượng làm bài dự kiến: 195 phút


cài đặt Font Awesome
npm i font-awesome 
cài đặt Bootstrap-Social
npm install bootstrap-social@5.1.1



cd lab

npm start 

npm install

git clone https://github.com/thunghiemweb/lab5.git lab5

git push https://github.com/thunghiemweb/lab5.git master

git add .

git commit -m "ghi chú commit"


div className="jumbotron"



   "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.1.3",
    "bootstrap-social": "^5.1.1",
    "dateformat": "^5.0.3",
    "font-awesome": "^4.7.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "reactstrap": "^9.1.1",
    "web-vitals": "^2.1.4"


"dependencies": {

"bootstrap": "4.0.0",
"bootstrap-social": "5.1.1",
"cross-fetch": "2.1.0",
"dateformat": "^4.5.1",
"font-awesome": "4.7.0",
"prop-types": "15.6.0",
"react": "^16.3.2",
"react-animation-components": "3.0.0",
"react-dom": "^16.3.2",
"react-popper": "0.9.2",
"react-redux": "5.0.7",
"react-redux-form": "1.16.8",
"react-router-dom": "4.2.2",
"react-scripts": "1.1.4",
"react-transition-group": "2.3.0",
"reactstrap": "5.0.0",
"redux": "3.7.2",
"redux-logger": "3.0.6",
"redux-thunk": "2.2.0",
"web-vitals": "^1.1.2"

},





Node.JS 17

"dependencies": {

"bootstrap": "^4.6.1",
"bootstrap-social": "^5.1.1",
"cross-fetch": "^3.1.5",
"dateformat": "^5.0.2",
"font-awesome": "^4.7.0",
"prop-types": "^15.8.1",
"react-popper": "^2.2.5",
"react-redux": "^7.2.6",
"react-redux-form": "^1.16.14",
"react-router-dom": "^6.2.1",
"react-scripts": "^5.0.0",
"react-transition-group": "^4.4.2",
"reactstrap": "^9.0.1",
"redux": "^4.1.2",
"redux-logger": "^3.0.6",
"redux-thunk": "^2.4.1",
"web-vitals": "^2.1.4"

}