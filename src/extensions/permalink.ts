import { ViewPlugin, ViewUpdate } from '@codemirror/view'
import { EditorState, EditorView } from '@codemirror/basic-setup'
import copy from 'copy-to-clipboard'

const linkId = '__permalink__'
const attributeHref = 'href'

function setLink(state: EditorState) {
  let newRef =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?snippet=' +
    encodeURIComponent(state.doc.toString())
  document.getElementById(linkId).setAttribute('href', newRef)
}

export const updatePermalink = ViewPlugin.fromClass(
  class {
    constructor(view: EditorView) {
      setLink(view.state)
    }

    update(update: ViewUpdate) {
      if (update.docChanged) {
        setLink(update.state)
      }
    }
  }
)

export function copyPermalink(){
  let snippet = document.getElementById(linkId).getAttribute(attributeHref)
  copy(snippet)
}