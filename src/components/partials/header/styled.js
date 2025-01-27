import styled from 'styled-components';

export const HeaderArea = styled.div`
    height:60px;
    background-color: #FFF;
    border-bottom:1px solid #CCC;

    .container{
        max-width:1000px;
        margin:auto;
        display:flex;
    }

    .menu-header{
        display:flex;
    }

    a{
        text-decoration:none;
    }
    
    .logo{
        flex:1;
        display:flex;
        align-items:center;
        height:60px;
        
    }
    .image-logo{
        height:60px;

    }

    nav{
        padding-top:10px;
        padding-bottom:10px;

        ul,li{
            margin:0;
            padding:0;
            list-style:none;
        }

        ul{
            display:flex;
            align-itens:center;
            height:40px;
        }
        li{
            margin-left:20px;
            margin-right:20px;
        }

        a{
            color:#000;
            font-size:14px;
            text-decoration:none;
            
            &:hover{
                color:#777;
            }
            
            &.button{
                background-color:#FF8100;
                border-radius:4px;
                color:#FFF;
                padding: 5px 10px;
            }

            &.button:hover{
                background-color: #E57706;
            }

    }
`;

