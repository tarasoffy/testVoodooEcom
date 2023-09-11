import { loadData } from "./loadData.js";

const wrapperPagination = document.querySelector('.wrapper-pagination')

const XTotalCount = 461
const limit = 24
const totalPages = Math.ceil(XTotalCount/limit)

export const pagination = (page) => {

    let startPagePosition
    let endPagePosition

    if(page < 4) {
        startPagePosition = 1
        endPagePosition =  6
    } else {
        
        if(page + 3 > totalPages) {
            endPagePosition = totalPages + 1
            startPagePosition = totalPages - 4
            
        } else {
            endPagePosition = page + 3 
            startPagePosition = page - 2
        }
    }

    const wrapperPaginationInner = document.createElement('div');

    wrapperPaginationInner.className="wrapper-pagination-inner w-[333px] h-[39px] flex justify-between"

    wrapperPagination.appendChild(wrapperPaginationInner)

    for(let i = startPagePosition; i < endPagePosition; i++) {

        const styleBtn = `cursor-pointer w-[39px] h-[39px] border border-black rounded-full flex items-center justify-center`
        const styleInnerTextBtn = `text-[18px]`

        const styleBtnFocus = "w-[39px] h-[39px] bg-[#1E1E1E] rounded-full flex items-center justify-center"
        const styleInnerTextBtnFocus = "text-[18px] text-white"
    
        const btnPagination = document.createElement('div');
        const textInBtn = document.createElement('a');
    
        textInBtn.textContent = `${i}`
    
        btnPagination.classList = i === page ? styleBtnFocus : styleBtn
        textInBtn.classList = i  === page ? styleInnerTextBtnFocus : styleInnerTextBtn
    
        wrapperPaginationInner.append(btnPagination)
        btnPagination.append(textInBtn)

        if(i === endPagePosition - 1) {
            const btnPaginationPointer = document.createElement('div');
            const btnPaginationTotalPages = document.createElement('div');
            const textInBtnPaginationPointer = document.createElement('p');
            const textInBtnPaginationTotalPages = document.createElement('p');
        
            btnPaginationPointer.classList = styleBtn
            textInBtnPaginationPointer.classList = styleInnerTextBtn
            btnPaginationTotalPages.classList = styleBtn
            textInBtnPaginationTotalPages.classList = styleInnerTextBtn
        
            textInBtnPaginationPointer.textContent = '...'
            textInBtnPaginationTotalPages.textContent = `${totalPages}`
            wrapperPaginationInner.appendChild(btnPaginationPointer)
            wrapperPaginationInner.appendChild(btnPaginationTotalPages)
            btnPaginationPointer.appendChild(textInBtnPaginationPointer)
            btnPaginationTotalPages.appendChild(textInBtnPaginationTotalPages)

            btnPaginationTotalPages.onclick = () => {
                const wrapperCurd = document.querySelector('.wrapper-card')
                const wrapperPaginationInner = document.querySelector('.wrapper-pagination-inner')
                wrapperPaginationInner.remove()
                pagination(totalPages)
                wrapperCurd.remove()
                loadData(totalPages)
            }

            }

            btnPagination.onclick = () => {
                const wrapperCurd = document.querySelector('.wrapper-card')
                const wrapperPaginationInner = document.querySelector('.wrapper-pagination-inner')
                wrapperPaginationInner.remove()
                pagination(i)
                wrapperCurd.remove()
                loadData(i)
            }
    }
}