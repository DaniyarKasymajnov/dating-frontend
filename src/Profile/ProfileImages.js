import React from 'react'
import {Modal} from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; `;

const ImageWrapper = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  & > img {
    max-width: 100px;
  }`;

  const ModalImagesBlurred = styled.img`
  filter: blur(10px)
  `
  const ModalImages = styled.img`
  filter: blur(0px)
  `

  const WrapperBlurred = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapperBlurred = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  & > img {
    max-width: 100px;
  }`;

  

class ProfileImages extends React.Component{
  constructor() {
    super();
    this.state = {
        modal: false,
        img: ''   
    }
  }
toggle = () => {
    this.setState({modal: !this.state.modal})
}

  render(){
      if(this.props.viewImages || this.props.ownProfile) {
        return (
          <Wrapper>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalImages src={this.state.img}/>
          </Modal>
          <div>
          {this.props.isEditable && <input type="file" onChange={(e)=> this.props.handleExtraImageChange(e)} />}
          {this.props.extraImages.map((imgUrl, i) => 
            <ImageWrapper>
              {this.props.isEditable && <button onClick={() => this.props.deleteExtraImage(i)}>x</button> }
              <ModalImages className="ModalImages"src={imgUrl} onClick={()=>this.setState({modal:true, img: imgUrl})}/>
            </ImageWrapper>
          )}

          </div>
        </Wrapper>
        )
      }
      else if(!this.props.viewImages) {
        return (
          <Wrapper>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalImagesBlurred src={this.state.img}/>
          </Modal>
          <div>
          {this.props.isEditable && <input type="file" onChange={(e)=> this.props.handleExtraImageChange(e)} />}
          {this.props.extraImages.map((imgUrl, i) => 
            <ImageWrapper>
              {this.props.isEditable && <button onClick={() => this.props.deleteExtraImage(i)}>x</button> }
              <ModalImagesBlurred className="ModalImages"src={imgUrl} onClick={()=>this.setState({modal:true, img: imgUrl})}/>
            </ImageWrapper>
          )}

          </div>
        </Wrapper>
        )
      }
  }
}

export default ProfileImages
