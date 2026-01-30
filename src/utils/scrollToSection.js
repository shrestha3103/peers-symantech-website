export const scrollToSection = (id, navigate) => {
  navigate("/");
  setTimeout(() => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};
