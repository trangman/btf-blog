import { visit } from 'unist-util-visit'

export function remarkFAQAccordion() {
  return (tree) => {
    visit(tree, 'heading', (node, index, parent) => {
      if (node.children?.[0]?.value === 'FAQ Section') {
        // Find the next heading to determine where FAQ section ends
        let faqEndIndex = parent.children.length
        for (let i = index + 1; i < parent.children.length; i++) {
          if (parent.children[i].type === 'heading') {
            faqEndIndex = i
            break
          }
        }
        
        // Extract FAQ content
        const faqContent = parent.children.slice(index + 1, faqEndIndex)
        const qaPairs = []
        
        // Parse Q&A pairs
        let currentQ = null
        let currentA = []
        
        faqContent.forEach(node => {
          if (node.type === 'paragraph') {
            const text = node.children?.map(child => child.value || '').join('') || ''
            
            if (text.startsWith('**Q:')) {
              // Save previous Q&A pair
              if (currentQ && currentA.length > 0) {
                qaPairs.push({
                  question: currentQ,
                  answer: currentA.join(' ').trim()
                })
              }
              
              // Start new question
              currentQ = text.replace('**Q:', '').replace('**', '').trim()
              currentA = []
            } else if (text.startsWith('A:') && currentQ) {
              // Add answer
              currentA.push(text.replace('A:', '').trim())
            }
          }
        })
        
        // Add the last Q&A pair
        if (currentQ && currentA.length > 0) {
          qaPairs.push({
            question: currentQ,
            answer: currentA.join(' ').trim()
          })
        }
        
        // Replace the FAQ section with a custom component
        if (qaPairs.length > 0) {
          parent.children.splice(index, faqEndIndex - index, {
            type: 'mdxJsxFlowElement',
            name: 'FAQAccordion',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'faqs',
                value: {
                  type: 'mdxJsxAttributeValueExpression',
                  value: JSON.stringify(qaPairs)
                }
              }
            ],
            children: []
          })
        }
      }
    })
  }
}
