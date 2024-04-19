import Image from "next/image";
import AniflixNav from "../components/navbar";
import FormModal from "@/components/formmodal";

export default function LandingPage() {


  const login_modal = [{ label: "Email", placeholder: "Enter your Email", variant: "bordered", close: "Close", buttonAction: "Login", password_endcontent: "", password_label: "Password", password_placeholder: "Enter your password.", type: "password", rm: true, fp: true, rp: false}]
  const signup_modal = [{ label: "Email", placeholder: "Enter signup email.", variant: "bordered", close: "Close", buttonAction: "Signup", password_endcontent: "", password_label: "Password", password_placeholder: "Enter your password.", type: "password", rm: false, fp: false, rp: true}]
  const navitems = [
    { component: <FormModal form_info={login_modal} modal_name={"Login"} /> },
    { component: <FormModal form_info={signup_modal} modal_name={"Sign up"} /> },

  ];


  return (<>
    <div className="relative bg-[url('/img/aniflix_banner.jpg')] w-screen h-screen  bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-screen h-screen lg:bg-opacity-50">
        <div className="relative bg-electric-blue">
          <AniflixNav navbarItems={navitems} />
        </div>
      </div>
    </div>
  </>);

}