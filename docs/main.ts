import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup'
import { indentService, IndentContext} from '@codemirror/language'
import { keymap, ViewUpdate } from '@codemirror/view';
import {indentWithTab} from '@codemirror/commands'
import { eo } from './eo'
let code = 
`+alias org.eolang.io.stdout
+alias org.eolang.txt.sprintf

#sample object
[args...] > main
  [y] > leap
    or. > @
      and.
        eq. (mod. y 4.0e-1) 0A-BB
        not. (eq. (mod. y 0x13a) --)
      eq. (mod. y 400.) TRUE
  stdout > @
    sprintf
      "%d is %sa leap year!"
      (args.get 0).as-int > year!
      if. (leap year:y) "" """not """
`;

const myTheme = EditorView.baseTheme({
  $: {
    maxHeight: '80vh',
    maxWidth: '50vw',
    outline: '1px auto #ddd',
  },
  $scroller: {
    fontFamily: '"Fira Mono", monospace',
    fontSize: '30px',
  }
})

function updatePermalink(cm: ViewUpdate){
  let newRef =
    window.location.protocol + '//' + window.location.host + window.location.pathname
    + "?snippet=" + encodeURIComponent(cm.state.doc.toString())
  document.getElementById('__permalink__').setAttribute("href", newRef)
}


function sameIndent(context: IndentContext, pos: number){
  return context.lineIndent(Math.max(pos-1, 0))
}

const initialState = EditorState.create({
  doc: code,
  extensions: [
    basicSetup,
    myTheme,
    eo(),
    EditorView.updateListener.of((v: ViewUpdate) =>{
      if (v.docChanged) {
        updatePermalink(v);
      }
    }),
    keymap.of([indentWithTab]),
    indentService.of(sameIndent)
  ]
})


const view = new EditorView({
  state: initialState,
  parent: document.querySelector("#editor")
})

export {view}