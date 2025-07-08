import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatReleaseDate = (date: Date): string => {
  return format(date, "dd 'de' MMM 'de' yyyy", { locale: ptBR });
};

export const formatYear = (date: Date): string => {
  return format(date, 'yyyy');
}; 
