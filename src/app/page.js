import Image from "next/image";
import AniflixNav from "../components/navbar";
import FormModal from "@/components/formmodal";

export default function LandingPage() {
  const login_modal = [{label: "Email", placeholder:"Enter your Email", variant: "bordered", close: "Close", buttonAction: "Login", password_endcontent: "", password_label: "Password", password_placeholder: "Enter your password.", type: "password", rm: true, fp: true, rp: false}]
  const signup_modal = [{label: "Email", placeholder:"Enter signup email.", variant: "bordered", close: "Close", buttonAction: "Signup", password_endcontent: "", password_label: "Password", password_placeholder: "Enter your password.", type: "password", rm: false, fp: false, rp: true}]
  const navitems = [
    {component: <FormModal form_info={login_modal}  modal_name={"Login"}/>},
    {component: <FormModal form_info={signup_modal}  modal_name={"Sign up"}/>},
    
  ];

  return (<>
    <AniflixNav navbarItems={navitems} />
    <h1>Landing Page</h1>

  </>);

}