const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-white p-8">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Kontak & Media Sosial
      </h2>
      <div className="text-center">
        <p>Email: contact@informatics.org</p>
        <p>Phone: +62 123 456 789</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-primary hover:text-secondary">
            Instagram
          </a>
          <a href="#" className="text-primary hover:text-secondary">
            Facebook
          </a>
          <a href="#" className="text-primary hover:text-secondary">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
