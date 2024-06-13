import { useState } from 'react';
import './App.css';
import Search from './Search/Search';
import HookUseState from './HookUseState/HookUseState';
import HookUseEffect from './HookUseEffect/HookUseEffect';
import HookUseEffectTwo from './HookUseEffect/HookUseEffectTwo';
import HookUseMemo from './HookUseMemo/HookUseMemo';
import HookUseContext from './HookUseContext/HookUseContext';

export default function App() {
  const [filteredHooks, setFilteredHooks] = useState([]);
  const [query, setQuery] = useState('');

  const getFilteredHooks = (query) => {
    const hooks = [];

    if (query === 'state' || query === 'useState' || query === 'usestate') {
      hooks.push(
        { id: 'state-title', element: <div id='state' className='title'>useState()</div> },
        { id: 'useState', element: <HookUseState /> }
      );
    }

    if (query === 'effect' || query === 'useEffect' || query === 'useeffect') {
      hooks.push(
        { id: 'effect-title', element: <div id='effect' className='title'>useEffect()</div> },
        { id: 'useEffect', element: <HookUseEffect /> },
        { id: 'useEffectTwo', element: <HookUseEffectTwo /> }
      );
    }

    if (query === 'memo' || query === 'useMemo' || query === 'usememo') {
      hooks.push(
        { id: 'memo-title', element: <div id='memo' className='title'>useMemo()</div> },
        { id: 'useMemo', element: <HookUseMemo /> }
      );
    }

    if (query === 'context' || query === 'useContext' || query === 'usecontext') {
      hooks.push(
        { id: 'context-title', element: <div id='context' className='title'>useContext()</div> },
        { id: 'useContext', element: <HookUseContext /> }
      );
    }

    return hooks;
  };

  const handleSearch = (query) => {
    const filtered = getFilteredHooks(query);
    setFilteredHooks(filtered);
    setQuery(query); // Update the query state
  };

  const handleClear = () => {
    setFilteredHooks([]); // Clear filtered hooks
    setQuery(''); // Clear query state
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
            <div key="state-title-default" id='state' className='title'>useState()</div>
            <HookUseState key="useState-default" />

            <div key="effect-title-default" id='effect' className='title'>useEffect()</div>
            <div className='container'>
              <HookUseEffect key="useEffect-default" />
              <HookUseEffectTwo key="useEffectTwo-default" />
            </div>

            <div key="memo-title-default" id='memo' className='title'>useMemo()</div>
            <HookUseMemo key="useMemo-default" />

            <div key="context-title-default" id='context' className='title'>useContext()</div>
            <HookUseContext key="useContext-default" />
          </>
        )}
      </div>
    </div>
  );
}

