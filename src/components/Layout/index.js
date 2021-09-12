import s from "./style.module.css";

const Layout = ({ title, descr, urlBg, colorBg, children }) => {
  const HeaderStyle = {
    backgroundColor: colorBg,
    backgroundImage: "url(" + urlBg + ")",
  };
  console.log("###" + children);
  return (
    <section className={s.root} style={HeaderStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          {!children ? (
            <div className={`${s.desc} ${s.full}`}>{descr}</div>
          ) : (
            ""
          )}
          {children ? (
            <div className={`${s.desc} ${s.full}`}>{children}</div>
          ) : (
            ""
          )}
        </article>
      </div>
    </section>
  );
};

export default Layout;
