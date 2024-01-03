
import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (dateString: string): string => {
  const dateObject = parseISO(dateString)
  return format(dateObject, 'MMM dd, yyyy', { locale: ptBR })
}
