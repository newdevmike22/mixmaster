import styled from "styled-components";

const Wrapper = styled.div`
    header {
        text-align: center;
        margin-bottom: 3rem;
        .btn {
            margin-bottom: 1rem;
        }
    } 
    
    .img {
        border-radius: var(--borderRadius);
        border: 2px solid var(--grey-900);
    }

    .drink-info {
        padding-top: 2rem;
    }

    .drink p {
        font-weight: 700;
        text-transform: uppercase;
        line-height: 2;
        margin-bottom: 1rem;
    }

    .drink-data {
        margin-right: 0.5rem;
        background: var(--primary-1300);
        padding: 0.25rem 0.5rem;
        border-radius: var(--borderRadius);
        color: var(--primary-1100);
        letter-spacing: var(--letterSpacing);
    }

    .ing {
        display: inline-block;
        margin-right: 0.5rem;
    }

    @media (min-width: 992px) {
        .drink {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 3rem;
            align-items: center;
        } 
        
        .drink-info {
            padding-top: 0;
        }
    }
`;

export default Wrapper;