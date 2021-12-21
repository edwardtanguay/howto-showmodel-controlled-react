import { useState } from 'react';
import { InfoModal } from './components/infoModal';
import './App.scss';

function App() {
	const [shouldShowModal, setShouldShowModal] = useState(false);

	return (
		<div className="App">
			<InfoModal shouldShow={shouldShowModal} onRequestClose={setShouldShowModal(false)}>
				<h2>Info</h2>
				<p>This is the info.</p>
			</InfoModal>
			<button onClick={setShouldShowModal(!shouldShowModal)}>
				{shouldShowModal ? 'Hide Modal' : 'Show Modal'}
			</button>
		</div>
	)
}

export default App;