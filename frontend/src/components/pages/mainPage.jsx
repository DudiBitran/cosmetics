import Header from "../header";
import Video from "../video";
import LeadForm from "../leadForm";
import Content from "../content";
import ScrollToLeadFormButton from "../scrollButton";
import Footer from "../footer";

function MainPage() {
  return (
    <main className="page">
      <div className="layout">
        <header className="header">
          <Header />
        </header>

        <section className="videoSection">
          <Video
            title="landing-page-video"
            video="https://res.cloudinary.com/durmd6voq/video/upload/v1775929872/Landing_Page_Video_iwvqmk.mp4"
            type="video/mp4"
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
    </main>
  );
}

export default MainPage;
