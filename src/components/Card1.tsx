import { CardBody, CardContainer, CardItem } from './ui/3d-card';

function Card1() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card"
        style={{ width: '640px' }}
      >
        <div style={{ position: 'relative' }}>
          <CardItem translateZ={60} className="w-full">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3"
              height={800}
              width={1280}
              style={{ height: '340px', width: '100%', objectFit: 'cover', borderRadius: '28px' }}
              className="group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <button
            aria-label="play"
            style={{
              position: 'absolute',
              inset: 0,
              margin: 'auto',
              width: '92px',
              height: '92px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.92)',
              border: '0',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 12px 30px rgba(0,0,0,0.18)'
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card1;
