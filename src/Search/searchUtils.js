import HookUseState from '../HookUseState/HookUseState';
import HookUseEffect from '../HookUseEffect/HookUseEffect';
import HookUseEffectTwo from '../HookUseEffect/HookUseEffectTwo';
import HookUseMemo from '../HookUseMemo/HookUseMemo';
import HookUseContext from '../HookUseContext/HookUseContext';
import HookUseRef from '../HookUseRef/HookUseRef';
import HookUseReducer from '../HookUseReducer/HookUseReducer';

export const getFilteredHooks = (query, navigateTo) => {
  const hooks = [];

  if (query === 'state' || query === 'useState' || query === 'usestate') {
    hooks.push(
      { id: 'state-title', element: <div id='state' className='title' onClick={() => navigateTo('https://youtu.be/O6P86uwfdR0?si=uYwqnKxmnAByV5yP')}>useState()</div> },
      { id: 'useState', element: <HookUseState /> }
    );
  }

  if (query === 'effect' || query === 'useEffect' || query === 'useeffect') {
    hooks.push(
      { id: 'effect-title', element: <div id='effect' className='title' onClick={() => navigateTo('https://youtu.be/0ZJgIjIuY7U?si=NJbZZDQLimZTF3Sy')}>useEffect()</div> },
      { id: 'useEffect', element: <HookUseEffect /> },
      { id: 'useEffectTwo', element: <HookUseEffectTwo /> }
    );
  }

  if (query === 'memo' || query === 'useMemo' || query === 'usememo') {
    hooks.push(
      { id: 'memo-title', element: <div id='memo' className='title' onClick={() => navigateTo('https://youtu.be/THL1OPn72vo?si=0J0V5omgqNlowrrj')}>useMemo()</div> },
      { id: 'useMemo', element: <HookUseMemo /> }
    );
  }

  if (query === 'context' || query === 'useContext' || query === 'usecontext') {
    hooks.push(
      { id: 'context-title', element: <div id='context' className='title' onClick={() => navigateTo('https://youtu.be/5LrDIWkK_Bc?si=0IGaHeawpppa-SE8')}>useContext()</div> },
      { id: 'useContext', element: <HookUseContext /> }
    );
  }

  if (query === 'ref' || query === 'useRef' || query === 'useref') {
    hooks.push(
      { id: 'ref-title', element: <div id='ref' className='title' onClick={() => navigateTo('https://youtu.be/t2ypzz6gJm0?si=v_dDYCda0t5pcE8u')}>useRef()</div> },
      { id: 'useRef', element: <HookUseRef /> }
    );
  }

  if (query === 'reducer' || query === 'useReducer' || query === 'usereducer') {
    hooks.push(
      { id: 'reducer-title', element: <div id='reducer' className='title' onClick={() => navigateTo('https://youtu.be/kK_Wqx3RnHk?si=3k2P-UHQgMWDLTWA')}>useReducer()</div> },
      { id: 'useReducer', element: <HookUseReducer /> }
    );
  }

  return hooks;
};
