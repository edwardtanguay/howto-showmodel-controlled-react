import styled from 'styled-components';

const ModalBackground = styled.div`
background: rgba(100,100,100, .8);
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
`;

const ModalBody = styled.div`
background: rgba(255, 255, 255, 1);
margin: 10% auto;
padding: 20px;
width: 50%;
border-radius: 5px;
z-index: 2;
.closeButton {
	float: right;
}
`;

export const InfoModal = ({ shouldShow, onRequestClose, children}) => {
	return shouldShow ? (
		<ModalBackground onClick={onRequestClose}>
			<ModalBody onClick={e => e.stopPropagation()}>
				<button onClick={onRequestClose}>Close</button>
				{children}
			</ModalBody>
		</ModalBackground>
	) : null;
};