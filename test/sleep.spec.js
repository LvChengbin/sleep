import sleep from '../src/sleep';

describe( 'sleep', () => {
    it( 'sleep 1 sec', done => {
        const start = new Date;
        sleep( 1000 ).then( () => {
            expect( new Date - start >= 1000 ).toBeTruthy();
            done();
        } );
    } );  
} );
