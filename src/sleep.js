import Promise from '@lvchengbin/promise';
export default time => new Promise( resolve => setTimeout( resolve, time ) );
