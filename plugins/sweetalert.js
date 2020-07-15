import Vue from 'vue'
import swal from 'sweetalert2/dist/sweetalert2.js'

function submitPhone() {
  swal
    .fire({
      title: '请输入您的手机号码',
      input: 'text',
      cancelButtonText: '取消',
      confirmButtonText: '确认',
      showCancelButton: true,
      inputValidator(value) {
        if (value) {
          return false
        } else {
          return '手机号格式不正确！'
        }
      },
    })
    .then(async (obj) => {
      if (obj.value) {
        await this.$axios.$post('/user/12345', {
          mobile: obj.value,
          from: 'p-en',
          name: 'p-en' + obj.value.substr(-4),
          remark: this.$route.path,
          sessionId: obj.value,
        })
        swal.fire(
          '报名成功！',
          '谢谢，我们的专业课程顾问老师将会与您联系！',
          'success'
        )
      }
    })
    .catch(swal.noop)
}

Vue.prototype.$submitPhone = submitPhone

// export async function submitPhonePc() {
//   if (validatePhone(this.mobile)) {
//     await addPen({
//       mobile: this.mobile,
//       from: "p-en",
//       name: "p-en" + this.mobile.substr(-4),
//       remark: this.$route.path,
//       sessionId: this.mobile,
//     });
//     this.mobile = "";
//     swal.fire(
//       "报名成功！",
//       "谢谢，我们的专业课程顾问老师将会与您联系！",
//       "success"
//     );
//   } else {
//     // swal.fire({
//     //   position: 'top',
//     //   icon: 'error',
//     //   title: '请输入正确的手机号！',
//     //   showConfirmButton: false,
//     //   timer: 1500
//     // })
//     this.$message({
//       duration: 3000,
//       type: "warning",
//       content: "手机号格式有误！",
//     });
//   }
// }
