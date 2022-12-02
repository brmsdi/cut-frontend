interface IProps {
  id: string;
  title: string;
  link: string;
  icon: string;
}
const Balloon = (props: IProps) => {
  return (
    <div id={props.id} className="balloon">
      <a
        className="animate-shake"
        title={props.title}
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <i className={props.icon}></i>
        </span>
      </a>
    </div>
  );
};

export default Balloon;
