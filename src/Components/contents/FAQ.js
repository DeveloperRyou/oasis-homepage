import { useState } from "react";
import { Collapse, Image } from "react-bootstrap";
import arrow from '../../images/arrow.png';

function FAQ(props) {
  const faq = props.data;
  const [menu, setMenu] = useState('common');
  function activateMenu(newMenu) {
    setMenu(newMenu);
  }
  let contentsID = {}
  faq.map((group, index_group) => {
    group.data.map((content, index_content) => {
      contentsID[content.id] = false;
    });
  });
  const [contentID, setContentID] = useState(contentsID);
  function activateContent(newContentID) {
    setContentID((prev) => {
      let current = {...prev};
      current[newContentID] = !current[newContentID];
      return current;
    });
  }
	return (
    <div >
      <div className="text-center">
        <p className="fs-1 text-blue-200 fw-medium">FAQ</p>
      </div>
      <div className="mt-5 mx-md-5">
        <div className="d-flex fs-5 fw-medium">
          <div onClick={() => {activateMenu('common')}} className={'nav-item '+(menu==='common'?'active':'')}>
            <p> 일반 </p>
          </div>
          <div onClick={() => {activateMenu('user')}} className={'nav-item '+(menu==='user'?'active':'')}>
            <p> 사용자 </p>
          </div>
          <div onClick={() => {activateMenu('point')}} className={'nav-item '+(menu==='point'?'active':'')}>
            <p> 포인트 </p>
          </div>
        </div>
        {faq.map((group, index_group) => 
          <div key={index_group} className={"mt-3 "+group.className+(menu===group.className?'':' d-none')}>
            {group.data.map((content, index_content) => 
              <div className="row-item" key={index_content} onClick={() => {activateContent(content.id)}}
              aria-controls={content.id} aria-expanded={contentID[content.id]}>
                <div className={"title d-flex justify-content-between px-4"}>
                  <div className="d-flex flex-column justify-content-center">
                    <p className="fs-5 fw-normal text-white mb-0">{content.title}</p>
                  </div>
                  <Image fluid className="p-2" src={arrow} />
                </div>
                <Collapse in={contentID[content.id]}>
                  <div id={content.id} className={"content"} >
                    <div className="p-4" dangerouslySetInnerHTML={{__html:content.content}}></div>
                  </div>
                </Collapse>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default FAQ;