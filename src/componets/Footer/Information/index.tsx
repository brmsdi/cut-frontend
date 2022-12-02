interface Props {
    title: string,
    link: string,
}
export const Information = (props: Props) => {
  return (
    <li>
      <a
        href={props.link}
        target={"_blank"}
        rel={"noreferrer"}
      >
        {props.title}
      </a>
    </li>
  );
};
