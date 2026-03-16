import { BanknoteArrowDown } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Goal } from 'lucide-react';
import { WalletCards } from 'lucide-react';
import { UserRound } from 'lucide-react';
import "./NavBottom.css";

export function NavBottom() {
    return (
        <nav className="nav-bottom">
            <ul className="nav-bottom-list">
                <li className="nav-bottom-list-item">
                    <WalletCards className='icon'/>
                    <a href="/salario">Meu Salário</a>
                </li>

                <li className="nav-bottom-list-item">
                    <BanknoteArrowDown className='icon'/>
                    <a href="/gastos">Gastos</a>
                </li>
                
                <li className="nav-bottom-list-item">
                    <LayoutDashboard className='icon'/>
                    <a href="/dashboard">Dashboard</a>
                </li>

                <li className="nav-bottom-list-item">
                    <Goal className='icon'/>
                    <a href="/metas">Metas</a>
                </li>

                <li className="nav-bottom-list-item">
                    <UserRound className='icon'/>
                    <a href="/perfil">Perfil</a>
                </li>
            </ul>
        </nav>
    )
}