import { CardBody, CardContainer, CardItem } from './ui/3d-card';

function Card1() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl border"
        style={{ width: '320px', padding: '16px' }}
      >
        <CardItem translateZ={80} className="w-full">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={600}
            width={600}
            style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '12px' }}
            className="group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default Card1;
