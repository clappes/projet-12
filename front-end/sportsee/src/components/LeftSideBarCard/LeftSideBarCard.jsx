import './LeftSideBarCard.css'

function LeftSideBarCard(props) {
  const { src } = props;
  return (
    <article className="leftsidebarcard">
      <img src={src} alt="img menu sidebar" />
    </article>
  );
}

export default LeftSideBarCard;