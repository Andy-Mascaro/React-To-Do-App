import React from 'react';
import { getTodos } from '../services/todos';

export default function Todos() {
  const [list, setList] = useState('');
  useEffect(() => {
      const fetchData = async () => {
    try { const data = await get getTodos }
      }
  })





  return (
    <div>Todos</div>
  );
}
