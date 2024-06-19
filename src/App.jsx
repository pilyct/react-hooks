import { useState } from 'react';
import './App.css';
import HookUseState from './HookUseState/HookUseState';
import HookUseEffect from './HookUseEffect/HookUseEffect';
import HookUseEffectTwo from './HookUseEffect/HookUseEffectTwo';
import HookUseMemo from './HookUseMemo/HookUseMemo';
import HookUseContext from './HookUseContext/HookUseContext';
import HookUseRef from './HookUseRef/HookUseRef';
import HookUseReducer from './HookUseReducer/HookUseReducer';
import Search from './Search/Search';
import { getFilteredHooks } from './Search/searchUtils';

export default function App() {
  const [filteredHooks, setFilteredHooks] = useState([]);
  const [query, setQuery] = useState('');


  const handleSearch = (query) => {
    const filtered = getFilteredHooks(query);
    setFilteredHooks(filtered);
    setQuery(query); // Update the query state
  };

  const handleClear = () => {
    setFilteredHooks([]); // Clear filtered hooks
    setQuery(''); // Clear query state
  };


  const navigateTo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <div className='titles'>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <h1>React Hooks</h1>
        <h3>Practice Exercises</h3>
      </div>
      <div className='search'>
        <Search onSearch={handleSearch} onClear={handleClear} query={query} />
      </div>
      <div className='hooks'>
        {filteredHooks.length > 0 ? (
          filteredHooks.map(({ id, element }) => <div key={id}>{element}</div>)
        ) : (
          <>
            <div key="state-title-default" id='state' className='title' onClick={() => navigateTo('https://youtu.be/O6P86uwfdR0?si=uYwqnKxmnAByV5yP')}>useState()</div>
            <HookUseState key="useState-default" />

            <div key="effect-title-default" id='effect' className='title' onClick={() => navigateTo('https://youtu.be/0ZJgIjIuY7U?si=NJbZZDQLimZTF3Sy')}>useEffect()</div>
            <div className='container'>
              <HookUseEffect key="useEffect-default" />
              <HookUseEffectTwo key="useEffectTwo-default" />
            </div>

            <div key="memo-title-default" id='memo' className='title' onClick={() => navigateTo('https://youtu.be/THL1OPn72vo?si=0J0V5omgqNlowrrj')}>useMemo()</div>
            <HookUseMemo key="useMemo-default" />

            <div key="context-title-default" id='context' className='title' onClick={() => navigateTo('https://youtu.be/5LrDIWkK_Bc?si=0IGaHeawpppa-SE8')}>useContext()</div>
            <HookUseContext key="useContext-default" />

            <div key="ref-title-default" id='ref' className='title' onClick={() => navigateTo('https://youtu.be/t2ypzz6gJm0?si=v_dDYCda0t5pcE8u')}>useRef()</div>
            <HookUseRef key="useRef-default" />

            <div key="reducer-title-default" id='ref' className='title' onClick={() => navigateTo('https://youtu.be/kK_Wqx3RnHk?si=3k2P-UHQgMWDLTWA')}>useReducer()</div>
            <HookUseReducer key="useReducer-default" />
          </>
        )}
      </div>
    </div>
  );
}

