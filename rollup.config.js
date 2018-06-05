import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default [ {
    input : 'src/sleep.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } )
    ],
    output : [
        { file : 'dist/sleep.cjs.js', format : 'cjs' },
        { file : 'dist/sleep.js', format : 'umd', name : 'sleep' }
    ]
}, {
    input : 'src/sleep.js',
    plugins : [
        resolve( {
            jsnext : true
        } ),
        buble( {
            transforms : {
                dangerousForOf : true
            }
        } )
    ],
    output : [
        { file : 'dist/sleep.bc.js', format : 'umd', name : 'sleep' }
    ]
} ];
