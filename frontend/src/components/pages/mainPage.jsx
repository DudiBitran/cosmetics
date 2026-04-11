import Header from "../header";
import Video from "../video";
import LeadForm from "../leadForm";
import Content from "../content";
import videoMov from "../../assets/landing_page_video.mov";
import ScrollToLeadFormButton from "../scrollButton";
import Footer from "../footer";

function MainPage() {
  return (
    <div className="page">
      <header className="header">
        <Header />
      </header>

      <section className="videoSection">
        <Video
          title="landing-page-video"
          videoMov={videoMov}
          type="video/quicktime"
          header="בואי תצפי בסרטון הבא"
        />
      </section>
      <section id="leadform" className="formSection">
        <LeadForm />
      </section>

      <section className="contentSection">
        <Content />
      </section>
      <ScrollToLeadFormButton />
      <Footer />
    </div>
  );
}

export default MainPage;
