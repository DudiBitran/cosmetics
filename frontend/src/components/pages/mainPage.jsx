import Header from "../header";
import Video from "../video";
import LeadForm from "../leadForm";
function MainPage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Video />
      </section>
      <section>
        <LeadForm />
      </section>
    </div>
  );
}

export default MainPage;
