import Swal from "sweetalert2";


export function showAxiosToast(message: string, iconType: string = "success") {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: iconType === "success" ? "success" : iconType === "warning" ? "warning" : iconType === "error" ? "error" : "error",
    title: message,
  });
}



export function showAxiosWarningMsg(message: string) {
  Swal.fire({
    icon: "warning",
    title: message,
    showConfirmButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "確定",
  });
}



export function showAxiosErrorMsg(message: string) {
  Swal.fire({
    icon: "error",
    title: message,
    showConfirmButton: true,
    confirmButtonColor: "#fc3f3f",
    confirmButtonText: "確定",
  });
}



export async function showConfirmDialog(message: string, confirmButtonMsg: string = `確定`, cancelButtonText: string = `取消`): Promise<boolean> {

  return Swal.fire({
    title: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonMsg,
    cancelButtonText: cancelButtonText,
  }).then(async (result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
}
