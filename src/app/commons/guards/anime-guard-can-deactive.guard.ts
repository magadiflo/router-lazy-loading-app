import { MedabotsComponent } from '../../pages/dashboard/medabots/medabots.component';

/**
 * https://angular.io/api/router/CanDeactivateFn
 * 
 * Si todos los guardias devuelven verdadero, la navegación continúa. Si algún guardia 
 * devuelve falso, se cancela la navegación. Si algún guardia devuelve un UrlTree, 
 * la navegación actual se cancela y comienza una nueva navegación al UrlTree devuelto 
 * por el guardia.
 * 
 * El siguiente ejemplo implementa y usa un CanDeactivateFn que verifica si el componente 
 * MedabotsComponent tiene cambios sin guardar antes de salir de la ruta.
 */

export const animeGuardCanDeactive = (component: MedabotsComponent): boolean => {
  console.log('AnimeGuardCanDeactive -> canDeactive()');

  const hasUnsavedChanges = component.hasUnsavedChanges;
  return hasUnsavedChanges ? confirm('¿Seguro que desea salir? tiene datos sin guardar') : !hasUnsavedChanges;
}